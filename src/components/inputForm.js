import React from 'react'

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleOptionChange(what){
        console.log(what)
    }

    render(){
        return(<section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field">
                        <label htmlFor="name">Meno a Priezvisko</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Telefon</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Cenova ponuka pre</label>
                    </div>
                    <div className="col-4">
                        <div className="field half first ">
                            <input type="radio" id="brana" name="what"/>
                            <label htmlFor="brana">Branu</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="field half ">
                            <input type="radio" id="oplotenie" name="what"/>
                            <label htmlFor="oplotenie">Oplotenie</label>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Rozmer</label>
                    </div>
                    <div className="field half first ">
                        <label htmlFor="email">Sirka(m)</label>
                        <input type="text" name="width" id="width" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Vyska(m)</label>
                        <input type="text" name="height" id="height" />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Farba</label>
                        <input type="text" name="color" id="color" />
                    </div>
                    <div className="col-4">
                        <div className="field half">
                            <input type="radio" id="rucna" name="property1" />
                            <label htmlFor="rucna">Rucna</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="field half">
                            <input type="radio" id="automaticka" name="property1" />
                            <label htmlFor="automaticka">Automaticka</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="field half">
                            <input type="radio" id="zateplena" name="property2" />
                            <label htmlFor="zateplena">zateplena</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="field half">
                            <input type="radio" id="nezateplena" name="property2" />
                            <label htmlFor="nezateplena">nezateplena</label>
                        </div>
                    </div>
                    
                    <div className="field">
                        <label htmlFor="message">Komentar</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="odoslat" /></li>
                        <li><input type="reset" value="vymazat" className="special" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <span>info@transferrum.sk</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Mobil</h3>
                        <span>+421 905 111 888</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Adresa</h3>
                        <span>Budovatelska 18<br />
                        064 01<br />
                        Stara Lubovna</span>
                    </div>
                </section>
            </section>
        </div>
    </section>)
    }
}

export default InputForm
