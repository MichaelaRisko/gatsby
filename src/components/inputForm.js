import React from 'react';
import NetlifyForm from 'react-netlify-form'

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", 
      email: "", 
      message: "",
      phone: "",
      place: "",
      offer: "",
      sizeHeight: "",
      sizeWidth: "",
      control: "",
      fenceGateType: "",
      gateColor: "",
      gateType:"",
      agree: false,
    };
  }

  handleChange = e => {
    if (e.target.name  === "offer" && e.target.name != this.state.offer && this.state.offer != null){
      this.setState({
        name: "", 
        email: "", 
        message: "",
        phone: "",
        place: "",
        offer: e.target.value,
        sizeHeight: "",
        sizeWidth: "",
        control: "",
        fenceGateType: "",
        gateColor: "",
        gateType:""
      })
    } else {
      this.setState({ [e.target.name]: e.target.value });
    } 
  }

  render() {
    
    const { name, email, phone, place, offer, sizeHeight, sizeWidth, control, fenceGateType, message, agree } = this.state;

    const ovladanie1 = (
      <div>
        <div className="field"><label>Typ ovládania</label></div>
        <div className="col-4">
          <div className="field half">
          <label className={control === 'rucne' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio" 
                  name={'control'}
                  value={"rucne"}
                  checked={control === "rucne"} 
                  onChange={this.handleChange} />
             Ručné</label>
          </div>
        </div>
        <div className="col-4">
          <div className="field half  ">
          <label className={control === 'automaticke' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio"
                  name={'control'}
                  value={'automaticke'} 
                  checked={control === 'automaticke'} 
                  onChange={this.handleChange} />
           Automatické</label>
          </div>
        </div>
      </div>
    );

    const rozmer1 = (
      <div>
      <div className="field">
                <label>Rozmery {this.state.offer === "garazova brana" ? 'brány' : 'oplotenia'}</label>
              </div>
              <div className="field ">
                <label>Šírka(m)</label>
                <input type="text" name="sizeWidth" value={sizeWidth} onChange={this.handleChange}/>
              </div>
              <div className="field ">
                <label>Výška(m)</label>
                <input type="text" name="sizeHeight" value={sizeHeight} onChange={this.handleChange}/>
              </div>
      </div>
    )


    const brana1 = (
      <div>
        <div className="field">
                <label>Rozmery {this.state.offer === "garazova brana" ? 'brány' : 'oplotenia'}</label>
              </div>
              <div className="field ">
                <label>Šírka(m)</label>
                <input type="text" name="sizeWidth" value={sizeWidth} onChange={this.handleChange}/>
              </div>
              <div className="field ">
                <label>Výška(m)</label>
                <input type="text" name="sizeHeight" value={sizeHeight} onChange={this.handleChange}/>
              </div>
        <div className="select-wrapper mb-5">
          <label>typ brány</label>
          <select name="gateType"  onChange={this.handleChange}>
            <option defaultValue="nevybrata">- Vyberte si typ brány -</option>
            <option value="Segmentová">Segmentová</option>
            <option value="Roletová">Roletová</option>
            <option value="Dvojkrídlová zateplená">Dvojkrídlová zateplená</option>
            <option value="Dvojkrídlová nezateplená">Dvojkrídlová nezateplená</option>
            <option value="Výklopná zateplená">Výklopná zateplená</option>
            <option value="Výklopná nezateplená">Výklopná nezateplená</option>
            <option value="Výklopná bez výplne">Výklopná bez výplne</option>
          </select>
        </div>

        <div className="select-wrapper mb-5">
          <label>farba</label>
          <select name="gateColor"  onChange={this.handleChange}>
            <option defaultValue="nevybrata">- Vyberte si farbu -</option>
            <option value="Biela RAL 9016">Biela RAL 9016</option>
            <option value="Hnedá RAL 8014">Hnedá RAL 8014</option>
            <option value="Sivá RAL 7016">Sivá RAL 7016</option>
            <option value="Zlatý dub">Zlatý dub</option>
            <option value="Orech">Orech</option>
            <option value="Celá paleta RAL a motívy podobné drevu">Celá paleta RAL a motívy podobné drevu</option>

          </select>
        </div>
        
        <div className="field"><label>Typ ovládania</label></div>
        <div className="col-4">
          <div className="field half">
          <label className={control === 'rucne' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio" 
                  name={'control'}
                  value={"rucne"}
                  checked={control === "rucne"} 
                  onChange={this.handleChange} />
             Ručné</label>
          </div>
        </div>
        <div className="col-4">
          <div className="field half  ">
          <label className={control === 'automaticke' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio"
                  name={'control'}
                  value={'automaticke'} 
                  checked={control === 'automaticke'} 
                  onChange={this.handleChange} />
           Automatické</label>
          </div>
        </div>
      </div>
    );

    const oplotenie1 = (
      <div>
        <div className="field">
                <label>Rozmery {this.state.offer === "garazova brana" ? 'brány' : 'oplotenia'}</label>
              </div>
              <div className="field ">
                <label>Šírka(m)</label>
                <input type="text" name="sizeWidth" value={sizeWidth} onChange={this.handleChange}/>
              </div>
              <div className="field ">
                <label>Výška(m)</label>
                <input type="text" name="sizeHeight" value={sizeHeight} onChange={this.handleChange}/>
              </div>
        <div className="field">
          <label>Typ brány pri oplotení</label>
        </div>

        <div className="field">
          <label className={fenceGateType === "brana dvojkridlova" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana dvojkridlova'} 
                  checked={fenceGateType === "brana dvojkridlova"} 
                  onChange={this.handleChange} />
          Brána Dvojkrídlová</label>
        </div>


        <div className="field">
          <label className={fenceGateType === "brana samonosta posuvna" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana samonosta posuvna'} 
                  checked={fenceGateType === "brana samonosta posuvna"} 
                  onChange={this.handleChange} />
          Brána samonostná posuvná</label>
        </div>


        <div className="field">
          <label className={fenceGateType === "brana samonosta posuvna bez vyplne" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana samonosta posuvna bez vyplne'} 
                  checked={fenceGateType === "brana samonosta posuvna bez vyplne"} 
                  onChange={this.handleChange} />
          Brána samonostná posuvná bez výplne</label>
        </div>
        
        <div className="field"><label>Typ ovládania</label></div>
        <div className="col-4">
          <div className="field half">
          <label className={control === 'rucne' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio" 
                  name={'control'}
                  value={"rucne"}
                  checked={control === "rucne"} 
                  onChange={this.handleChange} />
             Ručné</label>
          </div>
        </div>
        <div className="col-4">
          <div className="field half  ">
          <label className={control === 'automaticke' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio"
                  name={'control'}
                  value={'automaticke'} 
                  checked={control === 'automaticke'} 
                  onChange={this.handleChange} />
           Automatické</label>
          </div>
        </div>
      </div>

    );

    return(
      <section id="contact">
        <div className="inner">
          <section>
          <NetlifyForm name='contact'>
  {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
      <div>
            <div className="field">
                <label>Cenová ponuka pre</label>
              </div>
              <div className="col-4">
                <div className="field half">
          <label className={offer === "garazova brana" ? "form-label form-label-checked" : "form-label"}>                
                  <input type="radio" 
                  name={'offer'} 
                  value={'garazova brana'}
                  checked={offer === "garazova brana"} 
                  onChange={this.handleChange} />
                <strong>Garažovú Bránu</strong>
                </label>
                </div>
              </div>
              <div className="col-4">
                <div className="field half">
          <label className={offer === "oplotenie" ? "form-label form-label-checked" : "form-label"}>                  
                  <input type="radio" 
                  name={'offer'} 
                  value={"oplotenie"}
                  checked={offer === "oplotenie"} 
                  onChange={this.handleChange} />
                  <strong>Oplotenie</strong>
                  </label>
                </div>
              </div>
              <div className="field">
                <label>
                Meno a Priezvisko
                </label>
                <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={this.handleChange} 
                />
              </div>
              <div className="field">
                <label>Telefón</label>
                <input type="text" 
                name="phone" 
                value={phone} onChange={this.handleChange} />
                
              </div>
              <div className="field">
                <label>Email</label>
                <input type="text" 
                name="email" 
                value={email} onChange={this.handleChange} />
                
              </div>
              <div className="field">
                <label>Miesto montáže</label>
                <input type="text" 
                name="place" 
                value={place}
                onChange={this.handleChange} />
                
              </div>

             

              {offer === "garazova brana" && 
            <div>
            <div className="field">
                    <label>Rozmery {this.state.offer === "garazova brana" ? 'brány' : 'oplotenia'}</label>
                  </div>
                  <div className="field ">
                    <label>Šírka(m)</label>
                    <input type="text" name="sizeWidth" value={sizeWidth} onChange={this.handleChange}/>
                  </div>
                  <div className="field ">
                    <label>Výška(m)</label>
                    <input type="text" name="sizeHeight" value={sizeHeight} onChange={this.handleChange}/>
                  </div>
            <div className="select-wrapper mb-5">
              <label>typ brány</label>
              <select name="gateType"  onChange={this.handleChange}>
                <option defaultValue="nevybrata">- Vyberte si typ brány -</option>
                <option value="Segmentová">Segmentová</option>
                <option value="Roletová">Roletová</option>
                <option value="Dvojkrídlová zateplená">Dvojkrídlová zateplená</option>
                <option value="Dvojkrídlová nezateplená">Dvojkrídlová nezateplená</option>
                <option value="Výklopná zateplená">Výklopná zateplená</option>
                <option value="Výklopná nezateplená">Výklopná nezateplená</option>
                <option value="Výklopná bez výplne">Výklopná bez výplne</option>
              </select>
            </div>
    
            <div className="select-wrapper mb-5">
              <label>farba</label>
              <select name="gateColor"  onChange={this.handleChange}>
                <option defaultValue="nevybrata">- Vyberte si farbu -</option>
                <option value="Biela RAL 9016">Biela RAL 9016</option>
                <option value="Hnedá RAL 8014">Hnedá RAL 8014</option>
                <option value="Sivá RAL 7016">Sivá RAL 7016</option>
                <option value="Zlatý dub">Zlatý dub</option>
                <option value="Orech">Orech</option>
                <option value="Celá paleta RAL a motívy podobné drevu">Celá paleta RAL a motívy podobné drevu</option>
    
              </select>
            </div>
            
            <div className="field"><label>Typ ovládania</label></div>
            <div className="col-4">
              <div className="field half">
              <label className={control === 'rucne' ? "form-label form-label-checked" : "form-label"}>
              <input type="radio" 
                      name={'control'}
                      value={"rucne"}
                      checked={control === "rucne"} 
                      onChange={this.handleChange} />
                 Ručné</label>
              </div>
            </div>
            <div className="col-4">
              <div className="field half  ">
              <label className={control === 'automaticke' ? "form-label form-label-checked" : "form-label"}>
              <input type="radio"
                      name={'control'}
                      value={'automaticke'} 
                      checked={control === 'automaticke'} 
                      onChange={this.handleChange} />
               Automatické</label>
              </div>
            </div>
          </div>
            
            
            }	
               {offer === "oplotenie" &&  
              
              <div>
        <div className="field">
                <label>Rozmery {this.state.offer === "garazova brana" ? 'brány' : 'oplotenia'}</label>
              </div>
              <div className="field ">
                <label>Šírka(m)</label>
                <input type="text" name="sizeWidth" value={sizeWidth} onChange={this.handleChange}/>
              </div>
              <div className="field ">
                <label>Výška(m)</label>
                <input type="text" name="sizeHeight" value={sizeHeight} onChange={this.handleChange}/>
              </div>
        <div className="field">
          <label>Typ brány pri oplotení</label>
        </div>

        <div className="field">
          <label className={fenceGateType === "brana dvojkridlova" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana dvojkridlova'} 
                  checked={fenceGateType === "brana dvojkridlova"} 
                  onChange={this.handleChange} />
          Brána Dvojkrídlová</label>
        </div>


        <div className="field">
          <label className={fenceGateType === "brana samonosta posuvna" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana samonosta posuvna'} 
                  checked={fenceGateType === "brana samonosta posuvna"} 
                  onChange={this.handleChange} />
          Brána samonostná posuvná</label>
        </div>


        <div className="field">
          <label className={fenceGateType === "brana samonosta posuvna bez vyplne" ? "form-label form-label-checked" : "form-label"}>        
        <input type="radio" 
                  name={"fenceGateType"}
                  value={'brana samonosta posuvna bez vyplne'} 
                  checked={fenceGateType === "brana samonosta posuvna bez vyplne"} 
                  onChange={this.handleChange} />
          Brána samonostná posuvná bez výplne</label>
        </div>
        
        <div className="field"><label>Typ ovládania</label></div>
        <div className="col-4">
          <div className="field half">
          <label className={control === 'rucne' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio" 
                  name={'control'}
                  value={"rucne"}
                  checked={control === "rucne"} 
                  onChange={this.handleChange} />
             Ručné</label>
          </div>
        </div>
        <div className="col-4">
          <div className="field half  ">
          <label className={control === 'automaticke' ? "form-label form-label-checked" : "form-label"}>
          <input type="radio"
                  name={'control'}
                  value={'automaticke'} 
                  checked={control === 'automaticke'} 
                  onChange={this.handleChange} />
           Automatické</label>
          </div>
        </div>
      </div>
              
              }
               
              <div className="field">
                <label htmlFor="message">Komentár</label>
                <textarea name="message" 
                value={message} onChange={this.handleChange}
                rows="6" placeholder={offer === "garazova brana" ? "Do komentára uveďte prosím vzor" : "Do komentára uveďte prosím farbu a vzor"} />
              </div>
              <div>
                <p>
Kompletnú ponuku nájdete na 
                  <a href="https://www.wisniowski.pl/cz" target="_blank"><strong> https://www.wisniowski.pl/cz</strong></a>
                </p>
                
          <label className={this.state.agree ? "form-label form-label-checked" : "form-label"}>                
            <input type="checkbox" 
            name="agree"
            value={this.state.agree}
            defaultChecked={this.state.agree}
            onChange={() => this.setState({ agree: !this.state.agree })} />
            Súhlasím so spracovaním osobných údajov v zmysle zákona o ochrane osobných údajov č. 18/2018 Z. z. v znení neskorších predpisov</label>
  
              </div>
              {this.state.agree && <p>
Viac informácií nájdete v sekcii  
                  <a href="/spracovanie-osobnych-udajov" target="_blank"><strong> spracovanie osobných údajov </strong></a>
                </p>}

              <ul className="actions">
                <li><input type="submit" value="odoslať"/></li>
              </ul>
            </div>
             }
             </div>
           )}
         </NetlifyForm>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <h3>Email</h3>
                <span>info@transferrum.sk <br/>
                  martin@transferrum.sk</span>
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

