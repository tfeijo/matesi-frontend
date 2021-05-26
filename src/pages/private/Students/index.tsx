import { useEffect, useRef, useState } from 'react';
import { MdImportExport, MdSearch } from 'react-icons/md';
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

import { Container, Header, Filters, List, Courses, Footer } from './styles';
import Pagination from '../../../components/Pagination';
import Dropdown from '../../../components/Dropdown';
import api from '../../../services/api';
import Loader from '../../../components/Loader';

const COURSE_FLAGS: { [key: string]: React.FunctionComponent } = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

type Course = {
  id: string;
  name: string;
};

type CourseWithFlag = Course & { flag: string };

type Student = {
  first_name: string;
  last_name: string;
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

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>(
    {} as PaginationInfo,
  );

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
    async function loadData() {
      try {
        const { data } = await api.get<StudentsResponse>('users');

        setPaginationInfo({
          current_page: data.current_page,
          total: data.total,
          last_page: data.last_page,
        });

        const studentsWithFlag = formatStudents(data.users);

        setStudents(studentsWithFlag);
      } catch (error) {
        console.log(error);
        toast.error(
          'Não foi possível carregar os alunos cadastrados. Por favor, tente novamente',
        );
      }
    }

    loadData();
  }, []);

  if (students === null) return <Loader size={48} />;

  return (
    <Container>
      <Header>
        <div className="top-content">
          <h2>Alunos matrículados</h2>

          <Filters>
            <div className="buttons">
              <Dropdown className="dropdown" triggerTitle="Ordenar">
                <Dropdown.Item>
                  <button type="button">Nome: Asc</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">Nome: Desc</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">E-mail: Asc</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">E-mail: Desc</button>
                </Dropdown.Item>
              </Dropdown>

              <Dropdown className="dropdown" triggerTitle="Idioma">
                <Dropdown.Item>
                  <button type="button">Inglês</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">Espanhol</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">Francês</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">Alemão</button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button type="button">Coreano</button>
                </Dropdown.Item>
              </Dropdown>
            </div>

            <Form ref={formRef} onSubmit={data => console.log(data)}>
              <div className="search-box">
                <Input name="search" placeholder="Pesquisar" />
                <Button
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
          <button type="button">
            Nome <MdImportExport size={20} />
          </button>

          <p>Cursos</p>

          <button type="button">
            Email <MdImportExport size={20} />
          </button>

          <p>Telefone</p>
        </div>
      </Header>

      <List>
        {students.map(({ first_name, last_name, email, phone, courses }) => (
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
          </li>
        ))}
      </List>

      <Footer>
        <p>Mostrando 1-10 de {paginationInfo.total}</p>

        <Pagination
          totalPages={paginationInfo.last_page}
          onPageChange={page => alert(`A página atual é ${page}`)}
        />
      </Footer>
    </Container>
  );
};

export default Students;
