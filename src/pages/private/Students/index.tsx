import { useRef } from 'react';
import { MdImportExport, MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { ReactComponent as UsaFlag } from '../../../assets/flags/usa-square.svg';
import { ReactComponent as SpainFlag } from '../../../assets/flags/spain-square.svg';
import { ReactComponent as FranceFlag } from '../../../assets/flags/france-square.svg';
import { ReactComponent as KoreaFlag } from '../../../assets/flags/korea-square.svg';
import { ReactComponent as GermanyFlag } from '../../../assets/flags/germany-square.svg';

import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Header, Filters, List, Courses, Footer } from './styles';
import Pagination from '../../../components/Pagination';

const COURSE_FLAGS: { [key: string]: React.FunctionComponent } = {
  english: UsaFlag,
  spanish: SpainFlag,
  french: FranceFlag,
  korean: KoreaFlag,
  german: GermanyFlag,
};

const STUDENTS = [
  {
    id: 1,
    name: 'João da Silva Souza Fulano Nome Longo',
    email: 'umemailgrande12345@quentemail.com.br',
    phone: '(55) 24 91919-0101',
    courses: [{ id: 1, name: 'german' }],
  },
  {
    id: 2,
    name: 'João da Silva Souza Fulano',
    email: 'emaildojoao123@email.com',
    phone: '5524919190101',

    courses: [
      { id: 1, name: 'english' },
      { id: 2, name: 'spanish' },
    ],
  },
  {
    id: 3,
    name: 'João da Silva Souza Fulano',
    email: 'email@email.com',
    phone: '5524919190101',
    courses: [
      { id: 1, name: 'french' },
      { id: 2, name: 'spanish' },
      { id: 3, name: 'korean' },
    ],
  },
  {
    id: 4,
    name: 'João da Silva Souza Fulano',
    email: 'email@email.com',
    phone: '5524919190101',
    courses: [
      { id: 1, name: 'english' },
      { id: 2, name: 'korean' },
      { id: 3, name: 'german' },
      { id: 4, name: 'french' },
    ],
  },
  {
    id: 5,
    name: 'João da Silva Souza Fulano',
    email: 'email@email.com',
    phone: '5524919190101',
    courses: [
      { id: 1, name: 'korean' },
      { id: 2, name: 'spanish' },
      { id: 3, name: 'german' },
      { id: 4, name: 'english' },
      { id: 5, name: 'french' },
    ],
  },
];

const Students: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Header>
        <div className="top-content">
          <h2>Alunos matrículados</h2>

          <Filters>
            <div className="buttons">
              <div className="dropdown">
                <Button
                  icon={MdKeyboardArrowDown}
                  color="neutral"
                  variant="outline"
                >
                  Ordenar
                </Button>
              </div>

              <div className="dropdown">
                <Button
                  icon={MdKeyboardArrowDown}
                  color="neutral"
                  variant="outline"
                >
                  Idioma
                </Button>
              </div>
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
        {STUDENTS.map(({ id, name, email, phone, courses }) => (
          <li key={id}>
            <p>{name}</p>
            <Courses>
              {courses.map(course => {
                const FlagSVG = COURSE_FLAGS[course.name];
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
        <p>Mostrando 1-10 de 20</p>

        <Pagination
          totalPages={20}
          onPageChange={page => alert(`A página atual é ${page}`)}
        />
      </Footer>
    </Container>
  );
};

export default Students;
