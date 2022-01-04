import { useEffect, useRef, useState } from 'react';
import { MdEdit, MdSearch } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { toast } from 'react-toastify';
import { ReactComponent as UsaFlag } from '../../../assets/flags/usa-square.svg';
import { ReactComponent as SpainFlag } from '../../../assets/flags/spain-square.svg';
import { ReactComponent as FranceFlag } from '../../../assets/flags/france-square.svg';
import { ReactComponent as KoreaFlag } from '../../../assets/flags/korea-square.svg';
import { ReactComponent as GermanyFlag } from '../../../assets/flags/germany-square.svg';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  ModalTrigger,
  Header,
  Filters,
  List,
  Courses,
  Footer,
} from './styles';
import Pagination from '../../../components/Pagination';
import Dropdown from '../../../components/Dropdown';
import api from '../../../services/api';
import Loader from '../../../components/Loader';
import RegisterModal, { RegisterModalInitialData } from './RegisterModal';

const COURSE_FLAGS: { [key: string]: React.FunctionComponent } = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

type Course = { id: string; name: string };
type TProfile = { id: string; name: string };

type CourseWithFlag = Course & { flag: string };

type Student = {
  id: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  cpf: string;
  email: string;
  phone: string;
  courses: CourseWithFlag[];
};

type PaginationInfo = {
  current_page: number;
  total: number;
  last_page: number;
};

type StudentsWithoutFlag = Omit<Student, 'courses'> & {
  courses: Course[];
};

type StudentsResponse = PaginationInfo & { users: StudentsWithoutFlag[] };

type Filters = {
  orderBy: string;
  course: string;
  search: string;
};

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [studentProfile, setStudentProfile] = useState<TProfile>(
    {} as TProfile,
  );
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(
    null,
  );
  const [filters, setFilters] = useState<Filters>({
    orderBy: '',
    course: '',
    search: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(-1);

  function formatStudents(users: StudentsWithoutFlag[]) {
    return users.map(user => {
      const courses = user.courses.map(course => {
        let flag;

        switch (course.name) {
          case 'Inglês':
            flag = 'english';
            break;

          case 'Espanhol':
            flag = 'spanish';
            break;

          case 'Francês':
            flag = 'french';
            break;

          case 'Coreano':
            flag = 'korean';
            break;

          case 'Alemão':
            flag = 'german';
            break;

          default:
            flag = '';
            break;
        }

        return {
          ...course,
          flag,
        };
      });

      return {
        ...user,
        courses,
      };
    });
  }

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        const { data } = await api.get('courses');

        setAllCourses(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function loadProfiles() {
      const { data } = await api.get<TProfile[]>('profiles');

      const onlyStudentProfile = data.filter(
        profile => profile.name === 'student',
      );
      setStudentProfile({ ...onlyStudentProfile[0] });
    }
    loadCourses();
    loadProfiles();
  }, []);

  async function loadStudents(page = 1) {
    try {
      setIsLoading(true);
      const { orderBy, course, search } = filters;

      const { data } = await api.get<StudentsResponse>('users', {
        params: {
          orderBy,
          course,
          search,
          page,
        },
      });

      setPaginationInfo({
        current_page: data.current_page,
        total: data.total,
        last_page: data.last_page,
      });

      const studentsWithFlag = formatStudents(data.users);

      setStudents(studentsWithFlag);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(
        'Não foi possível carregar os alunos cadastrados. Por favor, tente novamente',
      );
      setStudents([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, [filters]);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true);
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
    if (editingStudent >= 0) setEditingStudent(-1);
  }

  function handleFilterByCourse(id?: string) {
    if (id === filters.course) return;
    setFilters({
      ...filters,
      course: id || '',
    });
  }

  function handleSearch(search: string) {
    setFilters({
      ...filters,
      search,
    });
  }

  function handleOrderBy(field: 'first_name' | 'email' | 'phone' | '') {
    if (field === filters.orderBy) return;
    setFilters({
      ...filters,
      orderBy: field,
    });
  }

  function handlePageChange(page: number) {
    loadStudents(page);
  }

  const { orderBy, course: courseFiltering } = filters;

  let orderByDropdownTitle;
  switch (orderBy) {
    case 'first_name':
      orderByDropdownTitle = 'Nome';
      break;

    case 'email':
      orderByDropdownTitle = 'E-mail';
      break;

    case 'phone':
      orderByDropdownTitle = 'Telefone';
      break;

    default:
      orderByDropdownTitle = 'Ordenar';
      break;
  }

  let courseFilterDropdownTitle = 'Idioma';
  allCourses.forEach(course => {
    if (course.id === courseFiltering) courseFilterDropdownTitle = course.name;
  });

  if (students === null) return <Loader size={48} style={{ height: '80vh' }} />;

  let editingInitialData;
  if (editingStudent >= 0) {
    const studentCourses: any = {};

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < students[editingStudent].courses.length; i++) {
      const course = students[editingStudent].courses[i];
      studentCourses[course.flag] = course.id;
    }

    const courses = studentCourses as RegisterModalInitialData;

    editingInitialData = {
      ...students[editingStudent],
      birth_date: new Date(students[editingStudent].birth_date),
      courses,
    };
  }

  return (
    <Container>
      <ModalTrigger>
        <Button
          color="secondary"
          variant="outline"
          onClick={() => handleOpenRegisterModal()}
        >
          Matricular aluno
        </Button>
        {studentProfile && (
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onRequestClose={handleCloseRegisterModal}
            courses={allCourses}
            studentProfile={studentProfile}
            initialData={editingInitialData as RegisterModalInitialData}
            onRegisterForm={() => loadStudents(paginationInfo?.current_page)}
          />
        )}
      </ModalTrigger>
      <Header>
        <div className="top-content">
          <h2>Alunos matrículados</h2>

          <Filters>
            <div className="buttons">
              <Dropdown
                className="dropdown"
                triggerTitle={orderByDropdownTitle}
              >
                <Dropdown.Item>
                  <button type="button" onClick={() => handleOrderBy('')}>
                    Limpar
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button
                    type="button"
                    onClick={() => handleOrderBy('first_name')}
                  >
                    Nome
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button" onClick={() => handleOrderBy('email')}>
                    Email
                  </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button" onClick={() => handleOrderBy('phone')}>
                    Telefone
                  </button>
                </Dropdown.Item>
              </Dropdown>

              {allCourses.length > 0 && (
                <Dropdown
                  className="dropdown"
                  triggerTitle={courseFilterDropdownTitle}
                >
                  <Dropdown.Item>
                    <button
                      type="button"
                      onClick={() => handleFilterByCourse('')}
                    >
                      Todos
                    </button>
                  </Dropdown.Item>
                  {allCourses.map(course => (
                    <Dropdown.Item key={course.id}>
                      <button
                        type="button"
                        onClick={() => handleFilterByCourse(course.id)}
                      >
                        {course.name}
                      </button>
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              )}
            </div>

            <Form
              ref={formRef}
              onSubmit={(data: { search: string }) => {
                handleSearch(data.search);
              }}
            >
              <div className="search-box">
                <Input name="search" placeholder="Pesquisar" />
                <Button
                  type="submit"
                  iconOnly
                  icon={MdSearch}
                  color="neutral"
                  variant="ghost"
                />
              </div>
            </Form>
          </Filters>
        </div>

        <div className="list-header">
          <p>Nome</p>
          <p>Cursos</p>
          <p>Email</p>
          <p>Telefone</p>
        </div>
      </Header>

      {isLoading ? (
        <Loader size={48} style={{ height: '20vh' }} />
      ) : (
        <>
          <List>
            {students.map(
              ({ first_name, last_name, email, phone, courses }, index) => (
                <li key={email}>
                  <p>
                    {first_name} {last_name}
                  </p>
                  <Courses>
                    {courses.map(course => {
                      const FlagSVG = COURSE_FLAGS[course.flag];
                      return <FlagSVG key={course.id} />;
                    })}
                  </Courses>
                  <p>
                    <span>E-mail: </span>
                    {email}
                  </p>
                  <p>
                    <span>Tel: </span>
                    {phone}
                  </p>
                  <span className="edit-student">
                    <Button
                      iconOnly
                      icon={MdEdit}
                      size="small"
                      color="secondary"
                      variant="outline"
                      onClick={() => {
                        setEditingStudent(index);
                        handleOpenRegisterModal();
                      }}
                    />
                  </span>
                </li>
              ),
            )}
          </List>

          {paginationInfo === null || (
            <Footer>
              <p>Total de registros: {paginationInfo.total}</p>

              <Pagination
                currentPage={Number(paginationInfo.current_page)}
                totalPages={paginationInfo.last_page}
                onPageChange={handlePageChange}
              />
            </Footer>
          )}
        </>
      )}
    </Container>
  );
};

export default Students;
