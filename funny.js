const niggers = UI.AddCheckbox("press to become a cocksucker");
const retarded = ["LOL that keybind", "amazing antiaim", "trash kd", "shit gamingcarpet", "nice fucking knifechanger", "interesting death", "plz give gamingcarpet", "refund that serverside", "nice account", "u pay for that mother", "nice fucking mother", "shit gamesense", "awesome window capture", "cant tell if u are serious about that window capture", "plz give kd", "lidl computer", "nice fucking death", "ahahahahahah that antiaim", "shit brain", "xDDDDDDDDD that steeringwheel assistance", "nice fucking osiris", "ahahahahahah that settings", "shit pasta", "cant tell if u are serious about this settings", "xDDDDDDDDD that osiris", "shit imaginary girlfriend", "send selly link for that sick knifechanger", "cool vip hack", "laughing my ass off that steeringwheel assistance", "send selly link to that sick config", "mcdonalds gamesense", "fantastic visuals", "astonishing imaginary girlfriend", "nice playstyle", "xDDDDDDDDD that internet", "nice fucking computer", "ahahahahahah that skeet", "laughing my ass of that internet", "ahahahahahah that config", "laughing my ass off that playstyle", "lidl visuals", "laughing my ass off that uid issue", "refund that antiaim", "u pay for that window capture", "crazy brain", "good playstyle", "xDDDDDDDDD that uid issue", "sick cheat", "pls give visuals", "nice cheat", "good paste", "plz give pasta", "crazy config", "u sell that account", "mcdonalds gamingcarpet", "plz give 1", "nice fucking brain", "lidl kd", "cool settings"
]; // inspired by masterlooser15

const killem = function()
{
    if(UI.GetValue.apply(null, niggers))
    {
        const attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
        if(Entity.IsLocalPlayer(attacker) && attacker != Entity.GetEntityFromUserID(Event.GetInt("userid")))
        {
            Cheat.ExecuteCommand("say " + retarded[Math.floor(Math.random() * retarded.length)]));
        }
    }
};

Cheat.ExecuteCommand("clear");
Cheat.Print("funny.js loaded, killsay count: " + retarded.length + "\n"); // zachem...
Cheat.RegisterCallback("player_death", "killem");
