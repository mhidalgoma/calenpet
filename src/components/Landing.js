import '../styles/App.scss';

const Landing = (props) => {
  return (
    <>
      <main className="landing">
        <h1 className="landing__title">Bienvenido/a a CalenPet.</h1>
        <p className="landing__text">
          Toda la información de tus mascotas organizada para que solo tengas
          que estar pendiente de darle mimos y sacarle calcetines de la boca.
        </p>
        <div className="landing__btn-div">
          <p className="landing__btn">Comenzar</p>
        </div>
      </main>
    </>
  );
};
export default Landing;
