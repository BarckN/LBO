let commande ="";
let  menu = 0;

const choixmenuA= document.getElementById("menuA")
choixmenuA.addEventListener('click',function(){
    nextStep()
    menu = 1;
    document.getElementById("choix_menu").classList.add("invisible");
    document.getElementById("choix_burger").classList.remove("invisible");
    retourMenu()
    const burgerSteak= document.getElementById("BurgerSteak")
        burgerSteak.addEventListener('click',function(){
        nextStep()
        commande+= "Steak haché ";
        document.getElementById("choix_burger").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourBurger()
        const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
            nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");   
                                 
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");   
                    afficheCommande(commande)             
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Steak haché;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
const burgerPoulet= document.getElementById("BurgerPoulet")
    burgerPoulet.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_burger").classList.add("invisible");
    document.getElementById("choix_accompagnement").classList.remove("invisible");
    retourBurger()
        const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poulet Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
const burgerPoisson= document.getElementById("BurgerPoisson")
    burgerPoisson.addEventListener('click',function(){  
        nextStep()
    document.getElementById("choix_burger").classList.add("invisible");
    document.getElementById("choix_accompagnement").classList.remove("invisible");
    retourBurger()
            const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : A - Poisson Panné;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})

})
})
const choixmenuB= document.getElementById("menuB")
choixmenuB.addEventListener('click',function(){
    nextStep()
    menu = 2
    document.getElementById("choix_menu").classList.add("invisible");
    document.getElementById("choix_viande").classList.remove("invisible");
    retourMenu()
    const tenders = document.getElementById("tenders")
        tenders.addEventListener('click',function(){
            nextStep()
        document.getElementById("choix_viande").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourViande()
            const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){                        nextStep()
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Tenders;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
const nuggets = document.getElementById("nuggets")
        nuggets.addEventListener('click',function(){
            nextStep()
        document.getElementById("choix_viande").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourViande()    
        const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){

                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Nuggets;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
const steak = document.getElementById("steak")
        steak.addEventListener('click',function(){
            nextStep()
        document.getElementById("choix_viande").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourViande()
            const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : B - Steak;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
})
const choixmenuC= document.getElementById("menuC")
choixmenuC.addEventListener('click',function(){
    nextStep()
    document.getElementById("choix_menu").classList.add("invisible");
    document.getElementById("choix_wrap").classList.remove("invisible");
    retourMenu()
    menu = 3
    const wrap_poulet = document.getElementById("wrap_poulet")
        wrap_poulet.addEventListener('click',function(){
            nextStep()
        document.getElementById("choix_wrap").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourWrap()
            const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poulet;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
})
    const wrap_poisson = document.getElementById("wrap_poisson")
        wrap_poisson.addEventListener('click',function(){
            nextStep()
        document.getElementById("choix_wrap").classList.add("invisible");
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        retourWrap()
            const frites= document.getElementById("frites")
            frites.addEventListener('click',function(){
                nextStep()
            document.getElementById("choix_accompagnement").classList.add("invisible");
            document.getElementById("choix_boisson").classList.remove("invisible");
            retourAccompagnement(menu)
            const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br> Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Frites;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
})
const salade= document.getElementById("salade")
    salade.addEventListener('click',function(){
        nextStep()
    document.getElementById("choix_accompagnement").classList.add("invisible");
    document.getElementById("choix_boisson").classList.remove("invisible");
    retourAccompagnement(menu)
                const coca= document.getElementById("coca")
                coca.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Coca;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const icedtea= document.getElementById("icedtea")
                icedtea.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Iced Tea;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
            })
            const eau= document.getElementById("eau")
                eau.addEventListener('click',function(){
                    nextStep()
                document.getElementById("choix_boisson").classList.add("invisible");
                document.getElementById("choix_dessert").classList.remove("invisible");
                retourBoisson(menu)
                const tiramisu= document.getElementById("tiramisu")
                    tiramisu.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Tiramisu .";
                    document.getElementById("choix_dessert").classList.add("invisible");   
                    afficheCommande(commande)             
                })
                const milkshake= document.getElementById("milkshake")
                    milkshake.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Milkshake .";
                    document.getElementById("choix_dessert").classList.add("invisible");                
                    afficheCommande(commande)
                })
                const yogurt= document.getElementById("yogurt")
                    yogurt.addEventListener('click',function(){
                    commande = "Menu : C - Poisson;<br/>Accompagnement : Salade;<br/>Boisson : Eau;<br/>Dessert : Yogurt .";
                    document.getElementById("choix_dessert").classList.add("invisible");  
                    afficheCommande(commande)              
                })
            })
})
})
})


function afficheCommande(commande){
    document.getElementById("stepper").classList.add("invisible")
    const confirmation = document.getElementById("confirmation")
    confirmation.classList.remove("invisible")
    retourDessert(menu)
    const boutonConf = document.getElementById("boutonConf")
    boutonConf.addEventListener('click',function(){
    confirmation.classList.add("invisible")
    const laCommande = document.getElementById("reception")
    laCommande.classList.remove("invisible")
    const recu = document.getElementById("recu_commande")
    recu.innerHTML = commande
        retourMenu()

    })

}

const lesChoix =["choix_menu","choix_burger","choix_viande","choix_wrap","choix_accompagnement","choix_boisson","choix_dessert"];

function retourMenu(){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    
    const leRetour = document.getElementById("retourMenu")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        document.getElementById("stepper").classList.remove("invisible")
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
            leRetour.classList.add("invisible")
            document.getElementById("reception").classList.add("invisible")
        })
        document.getElementById("choix_menu").classList.remove("invisible");
        resetStep()
    })
}

function retourBurger(){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourBurger")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("choix_burger").classList.remove("invisible");
        retourMenu()
        prevStep()
    })
}
function retourViande(){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourViande")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("choix_viande").classList.remove("invisible");
        retourMenu()
        prevStep()

    })
}

function retourWrap(){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourWrap")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("choix_wrap").classList.remove("invisible");
        retourMenu()
        prevStep()
    })
}

function retourAccompagnement(menu){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourAccompagnement")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("choix_accompagnement").classList.remove("invisible");
        prevStep()
        if(menu == 1){
            retourBurger()
        }else{
            if(menu == 2){
                retourViande()
            }else{
                retourWrap()
            }
        }
    })
}


function retourBoisson(menu){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourBoisson")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("choix_boisson").classList.remove("invisible");
        retourAccompagnement(menu)
        prevStep()
    })
}
function retourDessert(menu){
    document.getElementById("retourMenu").classList.add("invisible")
    document.getElementById("retourBurger").classList.add("invisible")
    document.getElementById("retourViande").classList.add("invisible")
    document.getElementById("retourWrap").classList.add("invisible")
    document.getElementById("retourAccompagnement").classList.add("invisible")
    document.getElementById("retourBoisson").classList.add("invisible")
    document.getElementById("retourDessert").classList.add("invisible")
    const leRetour = document.getElementById("retourDessert")
    leRetour.classList.remove("invisible")

    leRetour.addEventListener("click",function(){
        lesChoix.forEach(element => {
            document.getElementById(element).classList.add("invisible")
        })
        document.getElementById("confirmation").classList.add("invisible");
        document.getElementById("retourDessert").classList.add("invisible");
        document.getElementById("choix_dessert").classList.remove("invisible");
        document.getElementById("stepper").classList.remove("invisible");
        retourBoisson(menu)
    })
}


let currentStep = 1;
const totalSteps = 5;

  function updateStepper() {
    for (let i = 1; i <= totalSteps; i++) {
      const circle = document.getElementById(`step${i}`);
      const line = document.getElementById(`line${i - 1}`);
      
      if (i <= currentStep) {
        circle.classList.add('active');
        if (line) line.classList.add('active');
      } else {
        circle.classList.remove('active');
        if (line) line.classList.remove('active');
      }
    }
  }

  function nextStep() {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStepper();
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      updateStepper();
    }
  }

  function resetStep(){
    currentStep = 1;
    updateStepper();
  }


  // Initialiser le stepper
  updateStepper();