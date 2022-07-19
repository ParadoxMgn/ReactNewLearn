'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkTel = function (_React$Component) {
  _inherits(LinkTel, _React$Component);

  function LinkTel() {
    _classCallCheck(this, LinkTel);

    return _possibleConstructorReturn(this, (LinkTel.__proto__ || Object.getPrototypeOf(LinkTel)).apply(this, arguments));
  }

  _createClass(LinkTel, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { href: "tel:7(962)556-1234", className: this.props.className },
        this.props.children
      );
    }
  }]);

  return LinkTel;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            { className: "header" },
            React.createElement(
              "a",
              { href: "#" },
              React.createElement("div", { className: "header-logo" })
            ),
            React.createElement(LinkTel, { className: "header-phone" }),
            React.createElement(
              "div",
              { className: "header-phonelink" },
              React.createElement(
                LinkTel,
                { className: "itemClass" },
                "+7(962)556-1234"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Footer = function (_React$Component3) {
  _inherits(Footer, _React$Component3);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        null,
        React.createElement(
          "div",
          { className: "footer" },
          React.createElement("div", { className: "footer-logo" }),
          React.createElement(
            "div",
            { className: "footer-company" },
            React.createElement(
              "span",
              null,
              "\xA9 2020 XXXcompany. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."
            )
          ),
          React.createElement(LinkTel, { className: "footer-phone" }),
          React.createElement(
            "div",
            { className: "footer-websurfer" },
            React.createElement(
              "span",
              { className: "footer-websurfer_build" },
              "\u0421\u0434\u0435\u043B\u0430\u043D\u043E"
            ),
            " ",
            React.createElement(
              "a",
              { href: "#" },
              "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"
            )
          ),
          React.createElement(
            "div",
            { className: "footer-phonelink" },
            React.createElement(
              LinkTel,
              null,
              "+7(962)556-1234"
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var Main = function (_React$Component4) {
  _inherits(Main, _React$Component4);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "main",
        null,
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            { className: "main" },
            React.createElement(
              "h1",
              { className: "main-head" },
              "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A c \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435 4U"
            ),
            React.createElement(
              "div",
              { className: "main-small" },
              "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435."
            ),
            React.createElement(
              "button",
              { className: "btn main-btn" },
              React.createElement(
                "span",
                null,
                "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

var FeaturesImg = function (_React$Component5) {
  _inherits(FeaturesImg, _React$Component5);

  function FeaturesImg() {
    _classCallCheck(this, FeaturesImg);

    return _possibleConstructorReturn(this, (FeaturesImg.__proto__ || Object.getPrototypeOf(FeaturesImg)).apply(this, arguments));
  }

  _createClass(FeaturesImg, [{
    key: "render",
    value: function render() {
      var img = {
        backgroundImage: this.props.url
      };

      return React.createElement(
        "div",
        { className: "features-slider_item" },
        React.createElement("div", { className: "features-img", style: img }),
        React.createElement(
          "div",
          { className: "features-feature" },
          this.props.children
        )
      );
    }
  }]);

  return FeaturesImg;
}(React.Component);

var FeaturesButton = function (_React$Component6) {
  _inherits(FeaturesButton, _React$Component6);

  function FeaturesButton() {
    _classCallCheck(this, FeaturesButton);

    return _possibleConstructorReturn(this, (FeaturesButton.__proto__ || Object.getPrototypeOf(FeaturesButton)).apply(this, arguments));
  }

  _createClass(FeaturesButton, [{
    key: "render",
    value: function render() {
      var img = {
        backgroundImage: this.props.url
      };

      return React.createElement(
        "button",
        { className: this.props.className },
        React.createElement(
          "svg",
          { width: "9", height: "16", xmlns: "http://www.w3.org/2000/svg" },
          React.createElement("path", {
            d: "M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z" })
        )
      );
    }
  }]);

  return FeaturesButton;
}(React.Component);

var SectionFeatures = function (_React$Component7) {
  _inherits(SectionFeatures, _React$Component7);

  function SectionFeatures() {
    _classCallCheck(this, SectionFeatures);

    return _possibleConstructorReturn(this, (SectionFeatures.__proto__ || Object.getPrototypeOf(SectionFeatures)).apply(this, arguments));
  }

  _createClass(SectionFeatures, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "features" },
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            { className: "features-wrapper" },
            React.createElement(
              "h2",
              { className: "features-head" },
              "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
            ),
            React.createElement(
              "div",
              { className: "features-subhead" },
              "\u041E \u043D\u0430\u0441"
            ),
            React.createElement(
              "div",
              { className: "features-description" },
              "\u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0440\u0430\u0442\u043E\u0440\u0443 \u043E\u0442\u0442\u043E\u0447\u0438\u0442\u044C."
            ),
            React.createElement(
              "div",
              { className: "features-slider" },
              React.createElement(
                "div",
                { className: "features-slider_items" },
                React.createElement(
                  FeaturesImg,
                  { url: "url(./images/1.svg)" },
                  "\u041F\u0435\u0440\u0432\u043E\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"
                ),
                React.createElement(
                  FeaturesImg,
                  { url: "url(./images/2.svg)" },
                  "\u0412\u0442\u043E\u0440\u043E\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"
                ),
                React.createElement(
                  FeaturesImg,
                  { url: "url(./images/3.svg)" },
                  "\u0422\u0440\u0435\u0442\u044C\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"
                ),
                React.createElement(
                  FeaturesImg,
                  { url: "url(./images/4.svg)" },
                  "\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0435 \u0446\u0435\u043B\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E"
                )
              ),
              React.createElement(FeaturesButton, { className: "features-slider-arrow features-slider-prev" }),
              React.createElement(FeaturesButton, { className: "features-slider-arrow features-slider-next" })
            )
          )
        )
      );
    }
  }]);

  return SectionFeatures;
}(React.Component);

var FeaturesForm = function (_React$Component8) {
  _inherits(FeaturesForm, _React$Component8);

  function FeaturesForm() {
    _classCallCheck(this, FeaturesForm);

    return _possibleConstructorReturn(this, (FeaturesForm.__proto__ || Object.getPrototypeOf(FeaturesForm)).apply(this, arguments));
  }

  _createClass(FeaturesForm, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { action: "../mailer.smart.php", className: "contact-form" },
        React.createElement("input", { type: "text", placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" }),
        React.createElement("input", { type: "tel", placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }),
        React.createElement("input", { type: "email", placeholder: "E-mail" }),
        React.createElement(
          "button",
          { className: "btn contact-btn" },
          React.createElement(
            "span",
            null,
            "\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435"
          )
        )
      );
    }
  }]);

  return FeaturesForm;
}(React.Component);

var SectionContact = function (_React$Component9) {
  _inherits(SectionContact, _React$Component9);

  function SectionContact() {
    _classCallCheck(this, SectionContact);

    return _possibleConstructorReturn(this, (SectionContact.__proto__ || Object.getPrototypeOf(SectionContact)).apply(this, arguments));
  }

  _createClass(SectionContact, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        { className: "contact" },
        React.createElement(
          "div",
          { className: "wrapper" },
          React.createElement(
            "div",
            { className: "contact-wrapper" },
            React.createElement(
              "h2",
              { className: "contact-title" },
              "\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?"
            ),
            React.createElement(
              "div",
              { className: "contact-description" },
              "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u0438 \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432\u0430\u043C"
            ),
            React.createElement(FeaturesForm, null),
            React.createElement(
              "div",
              { className: "contact-personal" },
              "\u042F \u0434\u0430\u044E \u0441\u0432\u043E\u0451 ",
              React.createElement(
                "a",
                { href: "#" },
                "\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435"
              ),
              " \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043C\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."
            )
          )
        )
      );
    }
  }]);

  return SectionContact;
}(React.Component);

var MainBlock = function (_React$Component10) {
  _inherits(MainBlock, _React$Component10);

  function MainBlock() {
    _classCallCheck(this, MainBlock);

    return _possibleConstructorReturn(this, (MainBlock.__proto__ || Object.getPrototypeOf(MainBlock)).apply(this, arguments));
  }

  _createClass(MainBlock, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Main, null),
        React.createElement(SectionFeatures, null),
        React.createElement(SectionContact, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return MainBlock;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(MainBlock, null));