import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image de um átomo escrito react avançado"
    />
    <S.Title>Boilerplate para projetos NextJS</S.Title>
    <S.Description>
      Um boilerplate para ser utilizados em projetos com NextJS
    </S.Description>

    <S.Hero
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para um computador"
    />
  </S.Wrapper>
)

export default Main
