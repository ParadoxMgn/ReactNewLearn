'use strict';

class LinkTel extends React.Component {
  render() {
    return (<a href="tel:7(962)556-1234" className={this.props.className}>{this.props.children}</a>);
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <a href="#">
              <div className="header-logo"></div>
            </a>
            <LinkTel className="header-phone" />
            <div className="header-phonelink"><LinkTel className="itemClass">+7(962)556-1234</LinkTel></div>
          </div>
        </div>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-logo"></div>
          <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
          <LinkTel className="footer-phone" />
          <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a></div>
          <div className="footer-phonelink"><LinkTel>+7(962)556-1234</LinkTel></div>
        </div>
      </footer>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="main">
            <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
            <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
              вебмастеру сгенерировать несколько абзацев более.
            </div>
            <button className="btn main-btn"><span>Подробнее</span></button>
          </div>
        </div>
      </main>
    );
  }
}

class FeaturesImg extends React.Component {
  render() {
    const img = {
      backgroundImage: this.props.url
    }

    return (
      <div className="features-slider_item">
        <div className="features-img" style={img}></div>
        <div className="features-feature">{this.props.children}</div>
      </div>
    );
  }
}

class FeaturesButton extends React.Component {
  render() {
    const img = {
      backgroundImage: this.props.url
    }

    return (
      <button className={this.props.className}>
        <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
          </path>
        </svg>
      </button>
    );
  }
}

class SectionFeatures extends React.Component {
  render() {
    return (
      <section className="features">
        <div className="wrapper">
          <div className="features-wrapper">
            <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
            <div className="features-subhead">О нас</div>
            <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
              оратору отточить.
            </div>
            <div className="features-slider">
              <div className="features-slider_items">
                <FeaturesImg url="url(./images/1.svg)">Первое целевое преимущество</FeaturesImg>
                <FeaturesImg url="url(./images/2.svg)">Второе целевое преимущество</FeaturesImg>
                <FeaturesImg url="url(./images/3.svg)">Третье целевое преимущество</FeaturesImg>
                <FeaturesImg url="url(./images/4.svg)">Четвертое целевое преимущество</FeaturesImg>
              </div>
              <FeaturesButton className="features-slider-arrow features-slider-prev" />
              <FeaturesButton className="features-slider-arrow features-slider-next" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

class FeaturesForm extends React.Component {
  render() {
    return (
      <form action="../mailer.smart.php" className="contact-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Телефон" />
        <input type="email" placeholder="E-mail" />
        <button className="btn contact-btn"><span>Позвоните мне</span></button>
      </form>
    );
  }
}

class SectionContact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="wrapper">
          <div className="contact-wrapper">
            <h2 className="contact-title">Остались вопросы?</h2>
            <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
            <FeaturesForm />
            <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
            </div>
          </div>
        </div>
      </section >
    );
  }
}

class MainBlock extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <SectionFeatures />
        <SectionContact />
        <Footer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainBlock />);