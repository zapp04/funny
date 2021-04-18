/*
by zapp04
23.09.2020
inspired by masterlooser15

*/
const opener = ["LOL that", "amazing", "trash", "shit", "nice fucking", "interesting", "plz give", "refund that", "nice", "u pay for that", "awesome", "cant tell if u are serious about that", "lidl", "ahahahahahah that", "xDDDDDDDDD that","send selly link for that sick", "cool vip", "laughing my ass off that", "mcdonalds", "fantastic", "astonishing", "crazy", "good", "sick", "pls give", "breathtaking", "i cant believe that", "u sell that"];
const joiner = ["keybind", "antiaim", "kd", "gamingcarpet", "knifechanger", "death", "serverside", "account", "mother", "gamesense", "skeet", "window capture", "computer", "brain", "steeringwheel assistance", "osiris", "settings", "pasta", "imaginary girlfriend", "hack", "config", "visuals", "playstyle", "internet", "uid issue", "1", "gamingchair", "lethality", "negative iq", "resolver", "lagswitch"];

function hitem()
{
    const attacker_id = Event.GetInt("attacker");
    const attacker_weapon = Event.GetString("weapon");

    if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(attacker_id))) {
        Cheat.ExecuteCommand("say " + opener[Math.floor(Math.random() * opener.length)] + " " + joiner[Math.floor(Math.random() * joiner.length)] );
    }
}

Cheat.RegisterCallback("player_hurt", "hitem");
