import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Vetements from "./pages/Vetements";
import Chaussures from "./pages/Chaussures";
import Accessoires from "./pages/Accessoires";
import Beaute from "./pages/Beaute";
import Electroniques from "./pages/Electroniques";
import Maison from "./pages/Maison";
import VetementsH from "./pages/VetementsH";
import VetementsF from "./pages/VetementsF";
import VetementsE from "./pages/VetementsE";
import ChaussuresH from "./pages/ChaussuresH";
import ChaussuresF from "./pages/ChaussuresF";
import ChaussuresE from "./pages/ChaussuresE";
import Fbijoux from "./pages/Fbijoux";
import Sacs from "./pages/Sacs";
import Lunettes from "./pages/Lunettes";
import CommentCaMarche from "./pages/CommentCaMarche";
import Signin from "./pages/Signin";
import NvCompte from "./pages/NvCompte";
import navbar from "./Navbar/navbar";
import Vendre from "./pages/Vendre";
import Donner from "./pages/Donner";
import espadrilleH from "./pages/espadrilleH";
import espadrilleF from "./pages/espadrilleF";
import chaussuresFille from "./pages/chaussuresFille";
import chaussuresGarcon from "./pages/chaussuresGarcon";
import talon from "./pages/talon";
import mocassinH from "./pages/mocassinH";
import bottine from "./pages/bottine";
import botteH from "./pages/botteH";
import vesmon from "./pages/vesmon";
import pantalonH from "./pages/pantalonH";
import chempul from "./pages/chempul";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/a-propos"  component={About}/>
        <Route path="/contact"  component={Contact} />
        <Route path="/team"  component={Team} />
        <Route path="/events"  component={Events} />
        <Route path="/vetements"  component={Vetements}/>
        <Route path="/chaussures"  component={Chaussures}/>
        <Route path="/accessoires"  component={Accessoires}/>
        <Route path="/beaute"  component={Beaute}/>
        <Route path="/electroniques"  component={Electroniques}/>
        <Route path="/maison"  component={Maison}/>
        <Route path="/vetementsH"  component={VetementsH}/>
        <Route path="/vetementsF"  component={VetementsF}/>
        <Route path="/vetementsE"  component={VetementsE}/>
        <Route path="/chaussuresH"  component={ChaussuresH}/>
        <Route path="/chaussuresF"  component={ChaussuresF}/>
        <Route path="/chaussuresE"  component={ChaussuresE}/>
        <Route path="/fbijoux"  component={Fbijoux}/>
        <Route path="/lunettes"  component={Lunettes}/>
        <Route path="/sacs"  component={Sacs}/>
        <Route path="/signin"  component={Signin}/>
        <Route path="/nvCompte"  component={NvCompte}/>
        <Route path="/vendre"  component={Vendre}/>
        <Route path="/donner"  component={Donner}/>
        <Route path="/espadrilleH"  component={espadrilleH}/>
        <Route path="/espadrilleF"  component={espadrilleF}/>
        <Route path="/chaussuresFille"  component={chaussuresFille}/>
        <Route path="/chaussuresGarcon"  component={chaussuresGarcon}/>
        <Route path="/talon"  component={talon}/>
        <Route path="/mocassinH"  component={mocassinH}/>
        <Route path="/bottine"  component={bottine}/>
        <Route path="/botteH"  component={botteH}/>
        <Route path="/vesmon"  component={vesmon}/>
        <Route path="/pantalonH"  component={pantalonH}/>
        <Route path="/chempul"  component={chempul}/>
  
       
        
        <Route path="/commentCaMarche"  component={CommentCaMarche}/>
        <Route Component ={NotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
};
export default App;