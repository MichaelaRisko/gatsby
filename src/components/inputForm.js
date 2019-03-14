import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      what: null,
    };
  }


  render() {
    const ovladanie = () => (
      <div>
        <div className="field">
          <label htmlFor="">Typ ovládania</label>
        </div>

        <div className="col-4">
          <div className="field half  ">
            <input type="radio" id="rucne" name="typ_ovladania" />
            <label htmlFor="rucne">Ručné</label>
          </div>
        </div>


        <div className="col-4">
          <div className="field half  ">
            <input type="radio" id="automaticke" name="typ_ovladania" />
            <label htmlFor="automaticke">Automatické</label>
          </div>
        </div>
      </div>
    );


    const brana = () => (
      <div>
        <div className="field">
          <label>Rozmer Brány</label>
        </div>
        <div className="field ">
          <label>Šírka(m)</label>
          <input type="text" name="width" id="width" />
        </div>
        <div className="field ">
          <label>Výška(m)</label>
          <input type="text" name="height" id="height" />
        </div>

        <div className="select-wrapper mb-5">
          <label>typ brány</label>
          <select name="demo-category" id="demo-category">
            <option defaultValue="">- Vyberte si typ brány -</option>
            <option value="1">Segmentová</option>
            <option value="1">Roletová</option>
            <option value="1">Dvojkrídlová zateplená</option>
            <option value="1">Dvojkrídlová nezateplená</option>
            <option value="1">Výklopná zateplená</option>
            <option value="1">Výklopná nezateplená</option>
            <option value="1">Výklopná bez výplne</option>
          </select>
        </div>

        <div className="select-wrapper mb-5">
          <label>farba</label>
          <select name="demo-category" id="demo-category">
            <option defaultValue="">- Vyberte si farbu -</option>
            <option value="1">Biela RAL 9016</option>
            <option value="1">Hnedá RAL 8014</option>
            <option value="1">Sivá RAL 7016</option>
            <option value="1">Zlatý dub</option>
            <option value="1">Orech</option>
            <option value="1">Celá paleta RAL a motívy podobné drevu</option>

          </select>
        </div>
        {ovladanie()}

      </div>
    );

    const oplotenie = () => (
      <div>
        <div className="field">
          <label htmlFor="email">Rozmer</label>
        </div>
        <div className="field half first ">
          <label htmlFor="email">Šírka(m)</label>
          <input type="text" name="width" id="width" />
        </div>
        <div className="field half">
          <label htmlFor="email">Výška(m)</label>
          <input type="text" name="height" id="height" />
        </div>
        <div className="field">
          <label htmlFor="">Typ brány pri oplotení</label>
        </div>

        <div className="field">
          <input type="radio" id="brana_dvojkridlova" name="typ_brany" />
          <label htmlFor="brana_dvojkridlova">Brána Dvojkrídlová</label>
        </div>


        <div className="field">
          <input type="radio" id="brana_samonosta_posuvna" name="typ_brany" />
          <label htmlFor="brana_samonosta_posuvna">Brána samonostná posuvná</label>
        </div>


        <div className="field">
          <input type="radio" id="brana_samonosta_posuvna_bez_vyplne" name="typ_brany" />
          <label htmlFor="brana_samonosta_posuvna_bez_vyplne">Brána samonostná posuvná bez výplne</label>
        </div>
        {ovladanie()}
      </div>

    );


    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="#">
              <div className="field">
                <label htmlFor="name">Meno a Priezvisko</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Telefón</label>
                <input type="text" name="phone" id="phone" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="place">Miesto montáže</label>
                <input type="text" name="place" id="place" />
              </div>
              <div className="field">
                <label htmlFor="">Cenová ponuka pre</label>
              </div>
              <div className="col-4">
                <div className="field half first ">
                  <input type="radio" id="brana" name="what" onChange={e => this.setState({ what: e.target.id })} />
                  <label htmlFor="brana"><strong>Garažovú Bránu</strong></label>
                </div>
              </div>
              <div className="col-4">
                <div className="field half ">
                  <input type="radio" id="oplotenie" name="what" onChange={e => this.setState({ what: e.target.id })} />
                  <label htmlFor="oplotenie"><strong>Oplotenie</strong></label>
                </div>
              </div>
              {this.state.what === 'brana' && brana() }
              {this.state.what === 'oplotenie' && oplotenie() }

              <div className="field">
                <label htmlFor="message">Komentár</label>
                <textarea name="message" id="message" rows="6" placeholder="Do komentára uveďte prosím farbu a vzor" />
              </div>
              <div>
                <p>
Kompletnú ponuku nájdete na
                  <a href="https://www.wisniowski.pl/cz" target="_blank"><strong>https://www.wisniowski.pl/cz</strong></a>
                </p>
                {' '}
              </div>
              <ul className="actions">
                <li><input type="submit" value="odoslať" /></li>
                <li><input type="reset" value="vymazať" className="special" onClick={() => this.setState({ what: null })} /></li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <h3>Email</h3>
                <span>info@transferrum.sk</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone" />
                <h3>Mobil</h3>
                <span>
                  <strong>Marián Kaleta </strong>
+421 905 235 468
                  <br />
                  <strong>Martin Kaleta </strong>
                        +421 907 094 801
                  <br />
                  <strong>Predajňa</strong>
                  {' '}
052 4369019
                </span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home" />
                <h3>Marián Kaleta – Transferrum</h3>
                <span>

Budovateľská 18 <br/>
064 01 Stará Ľubovňa <br/>
IČO: 30614082 <br/>
DIČ: 1020762171 <br/>
IČ DPH: SK1020762171 <br/>
číslo živ. reg.: 710-1500
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

export default InputForm;
