const lookUpForm = document.querySelector("[multi-card-form]")
const loginCard = lookUpForm.querySelector("[data-card-login]")
const sheetCard = lookUpForm.querySelector("[data-card-sheet]")
const rollerCard = lookUpForm.querySelector("[data-card-roller]")
const loadButton = loginCard.querySelector("[data-load-button]")
let currentCharacter = "Mira"

const Characters = {
    "Default": {
        "Core": [3,0],
        "Strength": [0,"d6",0],
        "Dexterity": [0,"d6",0],
        "Intelligence": [0,"d6",0],
        "Swing": [0,0,0],
        "Spring": [0,0,0],
        "Sprint": [0,0,0],
        "Grasp": [0,0,0],
        "Endurance": [0,0,0],
        "Agility": [0,0,0],
        "Reaction": [0,0,0],
        "Stealth": [0,0,0],
        "Handling": [0,0,0],
        "Perception": [0,0,0],
        "Insight": [0,0,0],
        "Persuasion": [0,0,0],
        "Trickery": [0,0,0],
        "Accuracy": [0,0,0],
        "Survival": [0,0,0],
        "Extras": {
            "Extra1": ["...",0,0,0,""],
            "Extra2": ["...",0,0,0,""],
            "Extra3": ["...",0,0,0,""],
            "Extra4": ["...",0,0,0,""],
            "Extra5": ["...",0,0,0,""]
        },
        "Armor": {
            "Head": [0,0],
            "Right Shoulder": [0,0],
            "Left Shoulder": [0,0],
            "Chest": [1,0],
            "Right Arm": [0,0],
            "Left Arm": [0,0],
            "Waist": [0,0],
            "Right Leg": [0,0],
            "Left Leg": [0,0],
            "Right Foot": [0,0],
            "Left Foot": [0,0]
        }
    },
    "Mira": {
        "Core": [5,0],
        "Strength": [2,"d6",0],
        "Dexterity": [3,"d6",0],
        "Intelligence": [2,"d6",0],
        "Swing": [2,0,0],
        "Spring": [2,0,0],
        "Sprint": [2,0,0],
        "Grasp": [3,0,0],
        "Endurance": [2,0,0],
        "Agility": [2,0,0],
        "Reaction": [4,0,0],
        "Stealth": [3,0,3],
        "Handling": [-1,0,0],
        "Perception": [2,0,0],
        "Insight": [2,0,0],
        "Persuasion": [0,0,0],
        "Trickery": [2,0,0],
        "Accuracy": [3,0,0],
        "Survival": [1,0,0],
        "Extras": {
            "Extra1": ["Blacksmith",3,1,0,"INT"],
            "Extra2": ["Escapist",2,2,0,"DEX"],
            "Extra3": ["...",0,0,0,""],
            "Extra4": ["...",0,0,0,""],
            "Extra5": ["...",0,0,0,""]
        },
        "Armor": {
            "Head": [3,1],
            "Right Shoulder": [3,3],
            "Left Shoulder": [3,3],
            "Chest": [3,5],
            "Right Arm": [3,2],
            "Left Arm": [3,0],
            "Waist": [3,5],
            "Right Leg": [3,3],
            "Left Leg": [3,3],
            "Right Foot": [3,5],
            "Left Foot": [3,5]
        }
    },
    "Felix": {
        "Core": [4,0],
        "Strength": [3,"d6",0],
        "Dexterity": [1,"d6",0],
        "Intelligence": [2,"d6",0],
        "Swing": [4,0,0],
        "Spring": [4,0,0],
        "Sprint": [4,0,0],
        "Grasp": [3,0,0],
        "Endurance": [4,0,0],
        "Agility": [2,0,0],
        "Reaction": [0,0,0],
        "Stealth": [-1,0,0],
        "Handling": [2,0,0],
        "Perception": [0,0,0],
        "Insight": [0,0,0],
        "Persuasion": [3,0,0],
        "Trickery": [0,0,0],
        "Accuracy": [1,0,0],
        "Survival": [1,0,0],
        "Extras": {
            "Extra1": ["Knight",1,0,0,"INT"],
            "Extra2": ["...",0,0,0,""],
            "Extra3": ["...",0,0,0,""],
            "Extra4": ["...",0,0,0,""],
            "Extra5": ["...",0,0,0,""]
        },
        "Armor": {
            "Head": [3,0],
            "Right Shoulder": [3,0],
            "Left Shoulder": [3,0],
            "Chest": [3,0],
            "Right Arm": [3,0],
            "Left Arm": [3,0],
            "Waist": [3,0],
            "Right Leg": [3,0],
            "Left Leg": [3,0],
            "Right Foot": [3,0],
            "Left Foot": [3,0]
        }
    }
}

if (loginCard.classList.contains("active")) {
    loadButton.addEventListener("click", e => {
        const inputs = [...loginCard.querySelectorAll("input")]
        const allValid = inputs.every(input => input.checkValidity())
        if (allValid) {
            loginCard.classList.toggle("active")
            if (!sheetCard.classList.contains("active")) {
                sheetCard.classList.toggle("active")
            }
            if (inputs[0].value == "First Breath" || inputs[0].value == "Contarest") {
                if (inputs[1].value == "Ari" || inputs[1].value == "spark152") {
                    if (inputs[2].value == "FavoritePlayer") {
                        currentCharacter = "Mira"
                        document.getElementByClassName("portraitImg")[0].src = "1 Mira 5.5 (10).png";
                    }
                } else if (inputs[1].value == "Elias" || inputs[1].value == "agrofrog") {
                    if (inputs[2].value == "Erkiiiiiiiiiii") {
                        currentCharacter = "Felix"
                        document.getElementByClassName("portraitImg")[0].src = "2 Felix.png";
                    }
                }
            }
            
            document.getElementsByClassName("armorPoints")[0].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Head"][0]
            document.getElementsByClassName("headArmorMagic")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Head"][1]

            document.getElementsByClassName("armorPoints")[1].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Shoulder"][0]
            document.getElementsByClassName("shoulderArmorMagic1")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Shoulder"][1]

            document.getElementsByClassName("armorPoints")[2].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Shoulder"][0]
            document.getElementsByClassName("shoulderArmorMagic2")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Shoulder"][1]

            document.getElementsByClassName("armorPoints")[3].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Chest"][0]
            document.getElementsByClassName("chestArmorMagic")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Chest"][1]

            document.getElementsByClassName("armorPoints")[4].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Arm"][0]
            document.getElementsByClassName("armArmorMagic1")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Arm"][1]

            document.getElementsByClassName("armorPoints")[5].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Arm"][0]
            document.getElementsByClassName("armArmorMagic2")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Arm"][1]

            document.getElementsByClassName("armorPoints")[6].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Waist"][0]
            document.getElementsByClassName("waistArmorMagic")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Waist"][1]

            document.getElementsByClassName("armorPoints")[7].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Leg"][0]
            document.getElementsByClassName("legArmorMagic1")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Leg"][1]

            document.getElementsByClassName("armorPoints")[8].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Leg"][0]
            document.getElementsByClassName("legArmorMagic2")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Leg"][1]

            document.getElementsByClassName("armorPoints")[9].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Foot"][0]
            document.getElementsByClassName("footArmorMagic1")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Right Foot"][1]

            document.getElementsByClassName("armorPoints")[10].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Foot"][0]
            document.getElementsByClassName("footArmorMagic2")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Armor"]["Left Foot"][1]


            document.getElementsByClassName("corePoints")[0].querySelectorAll("h1")[0].innerText = "+" + Characters[currentCharacter]["Core"][0]
            document.getElementsByClassName("corePoints")[0].querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Core"][1]
            if (Characters[currentCharacter]["Core"][1] != 0) {
                document.getElementById("corePoints").querySelectorAll("h4").classList.toggle("active")
            }

            document.getElementById("strengthBonusPoints").querySelectorAll("h1")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
            document.getElementById("strengthDice").querySelectorAll("h3")[0].innerText = Characters[currentCharacter]["Strength"][1]
            document.getElementById("strengthCard").classList.toggle("active")

            document.getElementById("dexterityBonusPoints").querySelectorAll("h1")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
            document.getElementById("dexterityDice").querySelectorAll("h3")[0].innerText = Characters[currentCharacter]["Dexterity"][1]
            document.getElementById("dexterityCard").classList.toggle("active")

            document.getElementById("intelligenceBonusPoints").querySelectorAll("h1")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
            document.getElementById("intelligenceDice").querySelectorAll("h3")[0].innerText = Characters[currentCharacter]["Intelligence"][1]
            document.getElementById("intelligenceCard").classList.toggle("active")

            document.getElementById("swingBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Swing"][0]
            document.getElementById("swingMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Swing"][1]
            document.getElementById("swingFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Swing"][2]
            if (Characters[currentCharacter]["Swing"][1] != 0) {
                document.getElementById("swingMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Swing"][2] != 0) {
                    document.getElementById("swingFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("swingMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Swing"][2] != 0) {
                document.getElementById("swingFlatBonus").classList.toggle("active")
            }

            document.getElementById("springBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Spring"][0]
            document.getElementById("springMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Spring"][1]
            document.getElementById("springFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Spring"][2]
            if (Characters[currentCharacter]["Spring"][1] != 0) {
                document.getElementById("springMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Spring"][2] != 0) {
                    document.getElementById("springFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("springMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Spring"][2] != 0) {
                document.getElementById("springFlatBonus").classList.toggle("active")
            }

            document.getElementById("sprintBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Sprint"][0]
            document.getElementById("sprintMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Sprint"][1]
            document.getElementById("sprintFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Sprint"][2]
            if (Characters[currentCharacter]["Sprint"][1] != 0) {
                document.getElementById("sprintMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Sprint"][2] != 0) {
                    document.getElementById("sprintFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("sprintMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Sprint"][2] != 0) {
                document.getElementById("sprintFlatBonus").classList.toggle("active")
            }

            document.getElementById("graspBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Grasp"][0]
            document.getElementById("graspMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Grasp"][1]
            document.getElementById("graspFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Grasp"][2]
            if (Characters[currentCharacter]["Swing"][1] != 0) {
                document.getElementById("swingMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Swing"][2] != 0) {
                    document.getElementById("swingFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("swingMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Swing"][2] != 0) {
                document.getElementById("swingFlatBonus").classList.toggle("active")
            }

            document.getElementById("enduranceBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Endurance"][0]
            document.getElementById("enduranceMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Endurance"][1]
            document.getElementById("enduranceFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Endurance"][2]
            if (Characters[currentCharacter]["Swing"][1] != 0) {
                document.getElementById("swingMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Swing"][2] != 0) {
                    document.getElementById("swingFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("swingMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Swing"][2] != 0) {
                document.getElementById("swingFlatBonus").classList.toggle("active")
            }

            document.getElementById("agilityBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Agility"][0]
            document.getElementById("agilityMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Agility"][1]
            document.getElementById("agilityFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Agility"][2]
            if (Characters[currentCharacter]["Agility"][1] != 0) {
                document.getElementById("agilityMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Agility"][2] != 0) {
                    document.getElementById("agilityFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("agilityMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Agility"][2] != 0) {
                document.getElementById("agilityFlatBonus").classList.toggle("active")
            }

            document.getElementById("reactionBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Reaction"][0]
            document.getElementById("reactionMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Reaction"][1]
            document.getElementById("reactionFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Reaction"][2]
            if (Characters[currentCharacter]["Reaction"][1] != 0) {
                document.getElementById("reactionMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Reaction"][2] != 0) {
                    document.getElementById("reactionFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("reactionMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Reaction"][2] != 0) {
                document.getElementById("reactionFlatBonus").classList.toggle("active")
            }

            document.getElementById("stealthBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Stealth"][0]
            document.getElementById("stealthMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Stealth"][1]
            document.getElementById("stealthFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Stealth"][2]
            if (Characters[currentCharacter]["Stealth"][1] != 0) {
                document.getElementById("stealthMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Stealth"][2] != 0) {
                    document.getElementById("stealthFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("stealthMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Stealth"][2] != 0) {
                document.getElementById("stealthFlatBonus").classList.toggle("active")
            }

            document.getElementById("handlingBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Handling"][0]
            document.getElementById("handlingMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Handling"][1]
            document.getElementById("handlingFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Handling"][2]
            if (Characters[currentCharacter]["Handling"][1] != 0) {
                document.getElementById("handlingMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Handling"][2] != 0) {
                    document.getElementById("handlingFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("handlingMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Handling"][2] != 0) {
                document.getElementById("handlingFlatBonus").classList.toggle("active")
            }

            document.getElementById("perceptionBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Perception"][0]
            document.getElementById("perceptionMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Perception"][1]
            document.getElementById("perceptionFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Perception"][2]
            if (Characters[currentCharacter]["Perception"][1] != 0) {
                document.getElementById("perceptionMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Perception"][2] != 0) {
                    document.getElementById("perceptionFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("perceptionMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Perception"][2] != 0) {
                document.getElementById("perceptionFlatBonus").classList.toggle("active")
            }

            document.getElementById("insightBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Insight"][0]
            document.getElementById("insightMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Insight"][1]
            document.getElementById("insightFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Insight"][2]
            if (Characters[currentCharacter]["Insight"][1] != 0) {
                document.getElementById("insightMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Insight"][2] != 0) {
                    document.getElementById("insightFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("insightMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Insight"][2] != 0) {
                document.getElementById("insightFlatBonus").classList.toggle("active")
            }

            document.getElementById("persuasionBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Persuasion"][0]
            document.getElementById("persuasionMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Persuasion"][1]
            document.getElementById("persuasionFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Persuasion"][2]
            if (Characters[currentCharacter]["Persuasion"][1] != 0) {
                document.getElementById("persuasionMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Persuasion"][2] != 0) {
                    document.getElementById("persuasionFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("persuasionMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Persuasion"][2] != 0) {
                document.getElementById("persuasionFlatBonus").classList.toggle("active")
            }

            document.getElementById("trickeryBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Trickery"][0]
            document.getElementById("trickeryMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Trickery"][1]
            document.getElementById("trickeryFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Trickery"][2]
            if (Characters[currentCharacter]["Trickery"][1] != 0) {
                document.getElementById("trickeryMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Trickery"][2] != 0) {
                    document.getElementById("trickeryFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("trickeryMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Trickery"][2] != 0) {
                document.getElementById("trickeryFlatBonus").classList.toggle("active")
            }

            document.getElementById("accuracyBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Accuracy"][0]
            document.getElementById("accuracyMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Accuracy"][1]
            document.getElementById("accuracyFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Accuracy"][2]
            if (Characters[currentCharacter]["Accuracy"][1] != 0) {
                document.getElementById("accuracyMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Accuracy"][2] != 0) {
                    document.getElementById("accuracyFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("accuracyMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Accuracy"][2] != 0) {
                document.getElementById("accuracyFlatBonus").classList.toggle("active")
            }

            document.getElementById("survivalBonusPoints").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Survival"][0]
            document.getElementById("survivalMasteryPoints").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Survival"][1]
            document.getElementById("survivalFlatBonus").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Survival"][2]
            if (Characters[currentCharacter]["Survival"][1] != 0) {
                document.getElementById("survivalMasteryPoints").classList.toggle("active")
                if (Characters[currentCharacter]["Survival"][2] != 0) {
                    document.getElementById("survivalFlatBonus").classList.toggle("active")
                } else {
                    document.getElementById("survivalMasteryPoints").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Survival"][2] != 0) {
                document.getElementById("survivalFlatBonus").classList.toggle("active")
            }

            document.getElementById("extraSkillName1").querySelectorAll("h4")[0].innerText = Characters[currentCharacter]["Extras"]["Extra1"][0]
            document.getElementById("extraSkillBonusPoints1").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra1"][1]
            document.getElementById("extraSkillMasteryPoints1").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra1"][2]
            document.getElementById("extraSkillFlatBonus1").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra1"][3]
            document.getElementById("extraSkillAttrName1").querySelectorAll("h6")[0].innerText = Characters[currentCharacter]["Extras"]["Extra1"][4]
            if (Characters[currentCharacter]["Extras"]["Extra1"][0] != "...") {
                document.getElementById("extraSkillCard").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra1"][4] == "STR") {
                    document.getElementById("extraSkillAttrBonus1").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
                    document.getElementById("extraSkillAttr1").classList.add("strBox")
                    document.getElementById("extraSkillPoints1").classList.add("strBox")
                    document.getElementById("extraSkillName1").classList.add("strBox")
                    document.getElementById("extraSkillMasteryPoints1").classList.add("strMasteryBox")
                } else if (Characters[currentCharacter]["Extras"]["Extra1"][4] == "DEX") {
                    document.getElementById("extraSkillAttrBonus1").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
                    document.getElementById("extraSkillAttr1").classList.add("dexBox")
                    document.getElementById("extraSkillPoints1").classList.add("dexBox")
                    document.getElementById("extraSkillName1").classList.add("dexBox")
                    document.getElementById("extraSkillMasteryPoints1").classList.add("dexMasteryBox")
                } else if (Characters[currentCharacter]["Extras"]["Extra1"][4] == "INT") {
                    document.getElementById("extraSkillAttrBonus1").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
                    document.getElementById("extraSkillAttr1").classList.add("intBox")
                    document.getElementById("extraSkillPoints1").classList.add("intBox")
                    document.getElementById("extraSkillName1").classList.add("intBox")
                    document.getElementById("extraSkillMasteryPoints1").classList.add("intMasteryBox")
                } else if (Characters[currentCharacter]["Extras"]["Extra1"][4] == "") {
                    document.getElementById("extraSkillAttrBonus1").querySelectorAll("h3")[0].innerText = " "
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra1"][2] != 0) {
                document.getElementById("extraSkillMasteryPoints1").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra1"][3] != 0) {
                    document.getElementById("extraSkillFlatBonus1").classList.toggle("active")
                } else {
                    document.getElementById("extraSkillMasteryPoints1").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra1"][3] != 0) {
                document.getElementById("extraSkillFlatBonus1").classList.toggle("active")
            }

            document.getElementById("extraSkillName2").querySelectorAll("h4")[0].innerText = Characters[currentCharacter]["Extras"]["Extra2"][0]
            document.getElementById("extraSkillBonusPoints2").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra2"][1]
            document.getElementById("extraSkillMasteryPoints2").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra2"][2]
            document.getElementById("extraSkillFlatBonus2").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra2"][3]
            document.getElementById("extraSkillAttrName2").querySelectorAll("h6")[0].innerText = Characters[currentCharacter]["Extras"]["Extra2"][4]
            if (Characters[currentCharacter]["Extras"]["Extra2"][4] == "STR") {
                document.getElementById("extraSkillAttrBonus2").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
                document.getElementById("extraSkillAttr2").classList.add("strBox")
                document.getElementById("extraSkillPoints2").classList.add("strBox")
                document.getElementById("extraSkillName2").classList.add("strBox")
                document.getElementById("extraSkillMasteryPoints2").classList.add("strMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra2"][4] == "DEX") {
                document.getElementById("extraSkillAttrBonus2").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
                document.getElementById("extraSkillAttr2").classList.add("dexBox")
                document.getElementById("extraSkillPoints2").classList.add("dexBox")
                document.getElementById("extraSkillName2").classList.add("dexBox")
                document.getElementById("extraSkillMasteryPoints2").classList.add("dexMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra2"][4] == "INT") {
                document.getElementById("extraSkillAttrBonus2").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
                document.getElementById("extraSkillAttr2").classList.add("intBox")
                document.getElementById("extraSkillPoints2").classList.add("intBox")
                document.getElementById("extraSkillName2").classList.add("intBox")
                document.getElementById("extraSkillMasteryPoints2").classList.add("intMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra2"][4] == "") {
                document.getElementById("extraSkillAttrBonus2").querySelectorAll("h3")[0].innerText = " "
            }
            if (Characters[currentCharacter]["Extras"]["Extra2"][2] != 0) {
                document.getElementById("extraSkillMasteryPoints2").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra2"][3] != 0) {
                    document.getElementById("extraSkillFlatBonus2").classList.toggle("active")
                } else {
                    document.getElementById("extraSkillMasteryPoints2").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra2"][3] != 0) {
                document.getElementById("extraSkillFlatBonus2").classList.toggle("active")
            }

            document.getElementById("extraSkillName3").querySelectorAll("h4")[0].innerText = Characters[currentCharacter]["Extras"]["Extra3"][0]
            document.getElementById("extraSkillBonusPoints3").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra3"][1]
            document.getElementById("extraSkillMasteryPoints3").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra3"][2]
            document.getElementById("extraSkillFlatBonus3").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra3"][3]
            document.getElementById("extraSkillAttrName3").querySelectorAll("h6")[0].innerText = Characters[currentCharacter]["Extras"]["Extra3"][4]
            if (Characters[currentCharacter]["Extras"]["Extra3"][4] == "STR") {
                document.getElementById("extraSkillAttrBonus3").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
                document.getElementById("extraSkillAttr3").classList.add("strBox")
                document.getElementById("extraSkillPoints3").classList.add("strBox")
                document.getElementById("extraSkillName3").classList.add("strBox")
                document.getElementById("extraSkillMasteryPoints3").classList.add("strMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra3"][4] == "DEX") {
                document.getElementById("extraSkillAttrBonus3").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
                document.getElementById("extraSkillAttr3").classList.add("dexBox")
                document.getElementById("extraSkillPoints3").classList.add("dexBox")
                document.getElementById("extraSkillName3").classList.add("dexBox")
                document.getElementById("extraSkillMasteryPoints3").classList.add("dexMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra3"][4] == "INT") {
                document.getElementById("extraSkillAttrBonus3").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
                document.getElementById("extraSkillAttr3").classList.add("intBox")
                document.getElementById("extraSkillPoints3").classList.add("intBox")
                document.getElementById("extraSkillName3").classList.add("intBox")
                document.getElementById("extraSkillMasteryPoints3").classList.add("intMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra3"][4] == "") {
                document.getElementById("extraSkillAttrBonus3").querySelectorAll("h3")[0].innerText = " "
            }
            if (Characters[currentCharacter]["Extras"]["Extra3"][2] != 0) {
                document.getElementById("extraSkillMasteryPoints3").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra3"][3] != 0) {
                    document.getElementById("extraSkillFlatBonus3").classList.toggle("active")
                } else {
                    document.getElementById("extraSkillMasteryPoints3").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra3"][3] != 0) {
                document.getElementById("extraSkillFlatBonus3").classList.toggle("active")
            }

            document.getElementById("extraSkillName4").querySelectorAll("h4")[0].innerText = Characters[currentCharacter]["Extras"]["Extra4"][0]
            document.getElementById("extraSkillBonusPoints4").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra4"][1]
            document.getElementById("extraSkillMasteryPoints4").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra4"][2]
            document.getElementById("extraSkillFlatBonus4").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra4"][3]
            document.getElementById("extraSkillAttrName4").querySelectorAll("h6")[0].innerText = Characters[currentCharacter]["Extras"]["Extra4"][4]
            if (Characters[currentCharacter]["Extras"]["Extra4"][4] == "STR") {
                document.getElementById("extraSkillAttrBonus4").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
                document.getElementById("extraSkillAttr4").classList.add("strBox")
                document.getElementById("extraSkillPoints4").classList.add("strBox")
                document.getElementById("extraSkillName4").classList.add("strBox")
                document.getElementById("extraSkillMasteryPoints4").classList.add("strMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra4"][4] == "DEX") {
                document.getElementById("extraSkillAttrBonus4").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
                document.getElementById("extraSkillAttr4").classList.add("dexBox")
                document.getElementById("extraSkillPoints4").classList.add("dexBox")
                document.getElementById("extraSkillName4").classList.add("dexBox")
                document.getElementById("extraSkillMasteryPoints4").classList.add("dexMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra4"][4] == "INT") {
                document.getElementById("extraSkillAttrBonus4").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
                document.getElementById("extraSkillAttr4").classList.add("intBox")
                document.getElementById("extraSkillPoints4").classList.add("intBox")
                document.getElementById("extraSkillName4").classList.add("intBox")
                document.getElementById("extraSkillMasteryPoints4").classList.add("intMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra4"][4] == "") {
                document.getElementById("extraSkillAttrBonus4").querySelectorAll("h3")[0].innerText = " "
            }
            if (Characters[currentCharacter]["Extras"]["Extra4"][2] != 0) {
                document.getElementById("extraSkillMasteryPoints4").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra4"][3] != 0) {
                    document.getElementById("extraSkillFlatBonus4").classList.toggle("active")
                } else {
                    document.getElementById("extraSkillMasteryPoints4").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra4"][3] != 0) {
                document.getElementById("extraSkillFlatBonus4").classList.toggle("active")
            }

            document.getElementById("extraSkillName5").querySelectorAll("h4")[0].innerText = Characters[currentCharacter]["Extras"]["Extra5"][0]
            document.getElementById("extraSkillBonusPoints5").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra5"][1]
            document.getElementById("extraSkillMasteryPoints5").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra5"][2]
            document.getElementById("extraSkillFlatBonus5").querySelectorAll("h4")[0].innerText = "+" + Characters[currentCharacter]["Extras"]["Extra5"][3]
            document.getElementById("extraSkillAttrName5").querySelectorAll("h6")[0].innerText = Characters[currentCharacter]["Extras"]["Extra5"][4]
            if (Characters[currentCharacter]["Extras"]["Extra5"][4] == "STR") {
                document.getElementById("extraSkillAttrBonus5").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Strength"][0]
                document.getElementById("extraSkillAttr5").classList.toggle("strBox")
                document.getElementById("extraSkillPoints5").classList.toggle("strBox")
                document.getElementById("extraSkillName5").classList.toggle("strBox")
                document.getElementById("extraSkillMasteryPoints5").classList.toggle("strMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra5"][4] == "DEX") {
                document.getElementById("extraSkillAttrBonus5").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Dexterity"][0]
                document.getElementById("extraSkillAttr5").classList.toggle("dexBox")
                document.getElementById("extraSkillPoints5").classList.toggle("dexBox")
                document.getElementById("extraSkillName5").classList.toggle("dexBox")
                document.getElementById("extraSkillMasteryPoints5").classList.toggle("dexMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra5"][4] == "INT") {
                document.getElementById("extraSkillAttrBonus5").querySelectorAll("h3")[0].innerText = "+" + Characters[currentCharacter]["Intelligence"][0]
                document.getElementById("extraSkillAttr5").classList.toggle("intBox")
                document.getElementById("extraSkillPoints5").classList.toggle("intBox")
                document.getElementById("extraSkillName5").classList.toggle("intBox")
                document.getElementById("extraSkillMasteryPoints5").classList.toggle("intMasteryBox")
            } else if (Characters[currentCharacter]["Extras"]["Extra5"][4] == "") {
                document.getElementById("extraSkillAttrBonus5").querySelectorAll("h3")[0].innerText = " "
            }
            if (Characters[currentCharacter]["Extras"]["Extra5"][2] != 0) {
                document.getElementById("extraSkillMasteryPoints5").classList.toggle("active")
                if (Characters[currentCharacter]["Extras"]["Extra5"][3] != 0) {
                    document.getElementById("extraSkillFlatBonus5").classList.toggle("active")
                } else {
                    document.getElementById("extraSkillMasteryPoints5").classList.toggle("before")
                }
            }
            if (Characters[currentCharacter]["Extras"]["Extra5"][3] != 0) {
                document.getElementById("extraSkillFlatBonus5").classList.toggle("active")
            }

            let totalArmorRatio = parseInt(document.getElementsByClassName("totalArmorHolder")[0].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("/", "").replace("(", "").replace(")", ""))

            let headArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[0].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let headArmorMagic = parseInt(document.getElementsByClassName("headArmorMagic")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let headArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[0].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let shoulder1ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[1].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let shoulder1ArmorMagic = parseInt(document.getElementsByClassName("shoulderArmorMagic1")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let shoulder1ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[1].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let shoulder2ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[2].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let shoulder2ArmorMagic = parseInt(document.getElementsByClassName("shoulderArmorMagic1")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let shoulder2ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[2].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let chestArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[3].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let chestArmorMagic = parseInt(document.getElementsByClassName("chestArmorMagic")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let chestArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[3].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let arm1ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[4].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let arm1ArmorMagic = parseInt(document.getElementsByClassName("armArmorMagic1")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let arm1ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[4].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let arm2ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[5].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let arm2ArmorMagic = parseInt(document.getElementsByClassName("armArmorMagic2")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let arm2ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[5].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let waistArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[6].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let waistArmorMagic = parseInt(document.getElementsByClassName("waistArmorMagic")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let waistArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[6].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let leg1ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[7].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let leg1ArmorMagic = parseInt(document.getElementsByClassName("legArmorMagic1")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let leg1ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[7].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let leg2ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[8].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let leg2ArmorMagic = parseInt(document.getElementsByClassName("legArmorMagic2")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let leg2ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[8].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let foot1ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[7].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let foot1ArmorMagic = parseInt(document.getElementsByClassName("footArmorMagic1")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let foot1ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[7].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))

            let foot2ArmorBonus = parseInt(document.getElementsByClassName("armorPoints")[8].getElementsByClassName("armorBonus")[0].querySelectorAll("h3")[0].innerText.replace("+", ""))
            let foot2ArmorMagic = parseInt(document.getElementsByClassName("footArmorMagic2")[0].querySelectorAll("h4")[0].innerText.replace("+", ""))
            let foot2ArmorRatio = parseInt(document.getElementsByClassName("armorPoints")[8].getElementsByClassName("armorTotal")[0].querySelectorAll("h6")[0].innerText.replace("*", "").replace("(", "").replace(")", ""))


            let corePoints = parseInt(document.getElementsByClassName("corePoints")[0].querySelectorAll("h1")[0].innerText)
            let strengthBonusPoints = parseInt(document.getElementById("strengthBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))
            let dexterityBonusPoints = parseInt(document.getElementById("dexterityBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))
            let intelligenceBonusPoints = parseInt(document.getElementById("intelligenceBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))

            let swingBonusPoints = parseInt(document.getElementById("swingBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let springBonusPoints = parseInt(document.getElementById("springBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let springMasteryPoints = parseInt(document.getElementById("springMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
            let springFlatBonus = parseInt(document.getElementById("springFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))
            let sprintBonusPoints = parseInt(document.getElementById("sprintBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let sprintMasteryPoints = parseInt(document.getElementById("sprintMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
            let sprintFlatBonus = parseInt(document.getElementById("sprintFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))
            let graspBonusPoints = parseInt(document.getElementById("graspBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let enduranceBonusPoints = parseInt(document.getElementById("enduranceBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let enduranceMasteryPoints = parseInt(document.getElementById("enduranceMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
            
            let agilityBonusPoints = parseInt(document.getElementById("agilityBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let reactionBonusPoints = parseInt(document.getElementById("reactionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let stealthBonusPoints = parseInt(document.getElementById("stealthBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let handlingBonusPoints = parseInt(document.getElementById("handlingBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let perceptionBonusPoints = parseInt(document.getElementById("perceptionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            
            let insightBonusPoints = parseInt(document.getElementById("insightBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let persuasionBonusPoints = parseInt(document.getElementById("persuasionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
            let trickeryBonusPoints = parseInt(document.getElementById("trickeryBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))        
            let accuracyBonusPoints = parseInt(document.getElementById("accuracyBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))        
            let survivalBonusPoints = parseInt(document.getElementById("survivalBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))

            let extraSkill1Attribute = document.getElementById("extraSkillAttrName1").querySelectorAll("h6")[0].innerText
            let extraSkill1BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints1").querySelectorAll("h3")[0].innerText.replace("+",""))

            let extraSkill2Attribute = document.getElementById("extraSkillAttrName2").querySelectorAll("h6")[0].innerText
            let extraSkill2BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints2").querySelectorAll("h3")[0].innerText.replace("+",""))
            
            let extraSkill3Attribute = document.getElementById("extraSkillAttrName3").querySelectorAll("h6")[0].innerText
            let extraSkill3BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints3").querySelectorAll("h3")[0].innerText.replace("+",""))
            
            let extraSkill4Attribute = document.getElementById("extraSkillAttrName4").querySelectorAll("h6")[0].innerText
            let extraSkill4BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints4").querySelectorAll("h3")[0].innerText.replace("+",""))
            
            let extraSkill5Attribute = document.getElementById("extraSkillAttrName5").querySelectorAll("h6")[0].innerText
            let extraSkill5BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints5").querySelectorAll("h3")[0].innerText.replace("+",""))
            

            document.getElementById("jumpHeight").querySelectorAll("h2")[0].innerText = (strengthBonusPoints*2)+springBonusPoints+(springMasteryPoints*2)+springFlatBonus + "ft"
            document.getElementById("fallHeight").querySelectorAll("h2")[0].innerText = (corePoints*5)+(strengthBonusPoints*5)+(springBonusPoints*5)+(springMasteryPoints*10)+(springFlatBonus*5) + "ft"
            document.getElementById("carryWeight").querySelectorAll("h2")[0].innerText = (corePoints*25)+(strengthBonusPoints*25)+(enduranceBonusPoints*25)+(enduranceMasteryPoints*50) + "Lb"
            document.getElementById("movementSpeed").querySelectorAll("h2")[0].innerText = (corePoints*2)+(dexterityBonusPoints*5)+(sprintBonusPoints)+(sprintMasteryPoints*2)+(sprintFlatBonus) + "ft"

            let armorTotalBase = parseInt(((headArmorBonus*headArmorRatio)+(shoulder1ArmorBonus*shoulder1ArmorRatio)+(shoulder2ArmorBonus*shoulder2ArmorRatio)+(chestArmorBonus*chestArmorRatio)+(arm1ArmorBonus*arm1ArmorRatio)+(arm2ArmorBonus*arm2ArmorRatio)+(waistArmorBonus*waistArmorRatio)+(leg1ArmorBonus*leg1ArmorRatio)+(leg2ArmorBonus*leg2ArmorRatio)+(foot1ArmorBonus*foot1ArmorRatio)+(foot2ArmorBonus*foot2ArmorRatio))/(totalArmorRatio))
            let armorTotalMagic = parseInt(((headArmorMagic*headArmorRatio)+(shoulder1ArmorMagic*shoulder1ArmorRatio)+(shoulder2ArmorMagic*shoulder2ArmorRatio)+(chestArmorMagic*chestArmorRatio)+(arm1ArmorMagic*arm1ArmorRatio)+(arm2ArmorMagic*arm2ArmorRatio)+(waistArmorMagic*waistArmorRatio)+(leg1ArmorMagic*leg1ArmorRatio)+(leg2ArmorMagic*leg2ArmorRatio)+(foot1ArmorMagic*foot1ArmorRatio)+(foot2ArmorMagic*foot2ArmorRatio))/(totalArmorRatio))
            document.getElementsByClassName("totalArmorHolder")[0].getElementsByClassName("armorBonus")[0].querySelectorAll("h2")[0].innerText = "+" + armorTotalBase
            document.getElementsByClassName("totalArmorMagic")[0].querySelectorAll("h3")[0].innerText = "+" + armorTotalMagic
            if (armorTotalBase == 0) {
                document.getElementsByClassName("totalArmorType")[0].querySelectorAll("h3")[0].innerText = "Clothes"
            } else if (armorTotalBase == 1) {
                document.getElementsByClassName("totalArmorType")[0].querySelectorAll("h3")[0].innerText = "Gambeson"
            } else if (armorTotalBase == 2) {
                document.getElementsByClassName("totalArmorType")[0].querySelectorAll("h3")[0].innerText = "Chainmail"
            } else if (armorTotalBase == 3) {
                if (armorTotalMagic > 0) {
                    document.getElementsByClassName("totalArmorType")[0].querySelectorAll("h3")[0].innerText = "Magic Plate"
                } else {
                    document.getElementsByClassName("totalArmorType")[0].querySelectorAll("h3")[0].innerText = "Full Plate"
                }
            }

            document.getElementById("strengthTotalPoints").querySelectorAll("h3")[0].innerText = corePoints+strengthBonusPoints
            document.getElementById("dexterityTotalPoints").querySelectorAll("h3")[0].innerText = corePoints+dexterityBonusPoints
            document.getElementById("intelligenceTotalPoints").querySelectorAll("h3")[0].innerText = corePoints+intelligenceBonusPoints

            document.getElementById("swingTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+swingBonusPoints
            document.getElementById("springTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+springBonusPoints
            document.getElementById("sprintTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+sprintBonusPoints
            document.getElementById("graspTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+graspBonusPoints
            document.getElementById("enduranceTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+enduranceBonusPoints

            document.getElementById("agilityTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+agilityBonusPoints
            document.getElementById("reactionTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+reactionBonusPoints
            document.getElementById("stealthTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+stealthBonusPoints
            document.getElementById("handlingTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+handlingBonusPoints
            document.getElementById("perceptionTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+perceptionBonusPoints

            document.getElementById("insightTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+insightBonusPoints
            document.getElementById("persuasionTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+persuasionBonusPoints
            document.getElementById("trickeryTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+trickeryBonusPoints
            document.getElementById("accuracyTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+accuracyBonusPoints
            document.getElementById("survivalTotalPoints").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+survivalBonusPoints

            if (extraSkill1Attribute == "STR") {
                document.getElementById("extraSkillTotalPoints1").querySelectorAll("h6")[0].innerText = (corePoints+strengthBonusPoints+extraSkill1BonusPoints)
            } else if (extraSkill1Attribute == "DEX") {
                document.getElementById("extraSkillTotalPoints1").querySelectorAll("h6")[0].innerText = (corePoints+dexterityBonusPoints+extraSkill1BonusPoints)
            } else if (extraSkill1Attribute == "INT") {
                document.getElementById("extraSkillTotalPoints1").querySelectorAll("h6")[0].innerText = (corePoints+intelligenceBonusPoints+extraSkill1BonusPoints)
            } else if (extraSkill1Attribute == "") {
                document.getElementById("extraSkillTotalPoints1").querySelectorAll("h6")[0].innerText = ""
            }
            if (extraSkill2Attribute == "STR") {
                document.getElementById("extraSkillTotalPoints2").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+extraSkill2BonusPoints
            } else if (extraSkill2Attribute == "DEX") {
                document.getElementById("extraSkillTotalPoints2").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+extraSkill2BonusPoints
            } else if (extraSkill2Attribute == "INT") {
                document.getElementById("extraSkillTotalPoints2").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+extraSkill2BonusPoints
            } else if (extraSkill2Attribute == "") {
                document.getElementById("extraSkillTotalPoints2").querySelectorAll("h6")[0].innerText = ""
            }
            if (extraSkill3Attribute == "STR") {
                document.getElementById("extraSkillTotalPoints3").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+extraSkill3BonusPoints
            } else if (extraSkill3Attribute == "DEX") {
                document.getElementById("extraSkillTotalPoints3").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+extraSkill3BonusPoints
            } else if (extraSkill3Attribute == "INT") {
                document.getElementById("extraSkillTotalPoints3").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+extraSkill3BonusPoints
            } else if (extraSkill3Attribute == "") {
                document.getElementById("extraSkillTotalPoints3").querySelectorAll("h6")[0].innerText = ""
            }
            if (extraSkill4Attribute == "STR") {
                document.getElementById("extraSkillTotalPoints4").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+extraSkill4BonusPoints
            } else if (extraSkill4Attribute == "DEX") {
                document.getElementById("extraSkillTotalPoints4").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+extraSkill4BonusPoints
            } else if (extraSkill4Attribute == "INT") {
                document.getElementById("extraSkillTotalPoints4").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+extraSkill4BonusPoints
            } else if (extraSkill4Attribute == "") {
                document.getElementById("extraSkillTotalPoints4").querySelectorAll("h6")[0].innerText = ""
            }
            if (extraSkill5Attribute == "STR") {
                document.getElementById("extraSkillTotalPoints5").querySelectorAll("h6")[0].innerText = corePoints+strengthBonusPoints+extraSkill5BonusPoints
            } else if (extraSkill5Attribute == "DEX") {
                document.getElementById("extraSkillTotalPoints5").querySelectorAll("h6")[0].innerText = corePoints+dexterityBonusPoints+extraSkill5BonusPoints
            } else if (extraSkill5Attribute == "INT") {
                document.getElementById("extraSkillTotalPoints5").querySelectorAll("h6")[0].innerText = corePoints+intelligenceBonusPoints+extraSkill5BonusPoints
            } else if (extraSkill5Attribute == "") {
                document.getElementById("extraSkillTotalPoints5").querySelectorAll("h6")[0].innerText = ""
            }
        }
    })
}

if (!rollerCard.classList.contains("active") ) {
    sheetCard.addEventListener("click", e => {

        let corePoints = parseInt(document.getElementsByClassName("corePoints")[0].querySelectorAll("h1")[0].innerText)

        let strengthBonusPoints = parseInt(document.getElementById("strengthBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))
        let strengthDice = document.getElementById("strengthDice").querySelectorAll("h3")[0].innerText

        let dexterityBonusPoints = parseInt(document.getElementById("dexterityBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))
        let dexterityDice = document.getElementById("dexterityDice").querySelectorAll("h3")[0].innerText

        let intelligenceBonusPoints = parseInt(document.getElementById("intelligenceBonusPoints").querySelectorAll("h1")[0].innerText.replace("+",""))
        let intelligenceDice = document.getElementById("intelligenceDice").querySelectorAll("h3")[0].innerText

        let swingBonusPoints = parseInt(document.getElementById("swingBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let swingMasteryPoints = parseInt(document.getElementById("swingMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let swingFlatBonus = parseInt(document.getElementById("swingFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let springBonusPoints = parseInt(document.getElementById("springBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let springMasteryPoints = parseInt(document.getElementById("springMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let springFlatBonus = parseInt(document.getElementById("springFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let sprintBonusPoints = parseInt(document.getElementById("sprintBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let sprintMasteryPoints = parseInt(document.getElementById("sprintMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let sprintFlatBonus = parseInt(document.getElementById("sprintFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let graspBonusPoints = parseInt(document.getElementById("graspBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let graspMasteryPoints = parseInt(document.getElementById("graspMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let graspFlatBonus = parseInt(document.getElementById("graspFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let enduranceBonusPoints = parseInt(document.getElementById("enduranceBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let enduranceMasteryPoints = parseInt(document.getElementById("enduranceMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let enduranceFlatBonus = parseInt(document.getElementById("enduranceFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let agilityBonusPoints = parseInt(document.getElementById("agilityBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let agilityMasteryPoints = parseInt(document.getElementById("agilityMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let agilityFlatBonus = parseInt(document.getElementById("agilityFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let reactionBonusPoints = parseInt(document.getElementById("reactionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let reactionMasteryPoints = parseInt(document.getElementById("reactionMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let reactionFlatBonus = parseInt(document.getElementById("reactionFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let stealthBonusPoints = parseInt(document.getElementById("stealthBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let stealthMasteryPoints = parseInt(document.getElementById("stealthMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let stealthFlatBonus = parseInt(document.getElementById("stealthFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let handlingBonusPoints = parseInt(document.getElementById("handlingBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let handlingMasteryPoints = parseInt(document.getElementById("handlingMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let handlingFlatBonus = parseInt(document.getElementById("handlingFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let perceptionBonusPoints = parseInt(document.getElementById("perceptionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let perceptionMasteryPoints = parseInt(document.getElementById("perceptionMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let perceptionFlatBonus = parseInt(document.getElementById("perceptionFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let insightBonusPoints = parseInt(document.getElementById("insightBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let insightMasteryPoints = parseInt(document.getElementById("insightMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let insightFlatBonus = parseInt(document.getElementById("insightFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let persuasionBonusPoints = parseInt(document.getElementById("persuasionBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let persuasionMasteryPoints = parseInt(document.getElementById("persuasionMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let persuasionFlatBonus = parseInt(document.getElementById("persuasionFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let trickeryBonusPoints = parseInt(document.getElementById("trickeryBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let trickeryMasteryPoints = parseInt(document.getElementById("trickeryMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let trickeryFlatBonus = parseInt(document.getElementById("trickeryFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let accuracyBonusPoints = parseInt(document.getElementById("accuracyBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let accuracyMasteryPoints = parseInt(document.getElementById("accuracyMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let accuracyFlatBonus = parseInt(document.getElementById("accuracyFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let survivalBonusPoints = parseInt(document.getElementById("survivalBonusPoints").querySelectorAll("h3")[0].innerText.replace("+",""))
        let survivalMasteryPoints = parseInt(document.getElementById("survivalMasteryPoints").querySelectorAll("h4")[0].innerText.replace("+",""))
        let survivalFlatBonus = parseInt(document.getElementById("survivalFlatBonus").querySelectorAll("h4")[0].innerText.replace("+",""))

        let extraSkill1Attribute = document.getElementById("extraSkillAttrName1").querySelectorAll("h6")[0].innerText
        let extraSkill1BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints1").querySelectorAll("h3")[0].innerText.replace("+",""))
        let extraSkill1MasteryPoints = parseInt(document.getElementById("extraSkillMasteryPoints1").querySelectorAll("h4")[0].innerText.replace("+",""))
        let extraSkill1FlatBonus = parseInt(document.getElementById("extraSkillFlatBonus1").querySelectorAll("h4")[0].innerText.replace("+",""))

        let extraSkill2Attribute = document.getElementById("extraSkillAttrName2").querySelectorAll("h6")[0].innerText
        let extraSkill2BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints2").querySelectorAll("h3")[0].innerText.replace("+",""))
        let extraSkill2MasteryPoints = parseInt(document.getElementById("extraSkillMasteryPoints2").querySelectorAll("h4")[0].innerText.replace("+",""))
        let extraSkill2FlatBonus = parseInt(document.getElementById("extraSkillFlatBonus2").querySelectorAll("h4")[0].innerText.replace("+",""))

        let extraSkill3Attribute = document.getElementById("extraSkillAttrName3").querySelectorAll("h6")[0].innerText
        let extraSkill3BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints3").querySelectorAll("h3")[0].innerText.replace("+",""))
        let extraSkill3MasteryPoints = parseInt(document.getElementById("extraSkillMasteryPoints3").querySelectorAll("h4")[0].innerText.replace("+",""))
        let extraSkill3FlatBonus = parseInt(document.getElementById("extraSkillFlatBonus3").querySelectorAll("h4")[0].innerText.replace("+",""))

        let extraSkill4Attribute = document.getElementById("extraSkillAttrName4").querySelectorAll("h6")[0].innerText
        let extraSkill4BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints4").querySelectorAll("h3")[0].innerText.replace("+",""))
        let extraSkill4MasteryPoints = parseInt(document.getElementById("extraSkillMasteryPoints4").querySelectorAll("h4")[0].innerText.replace("+",""))
        let extraSkill4FlatBonus = parseInt(document.getElementById("extraSkillFlatBonus4").querySelectorAll("h4")[0].innerText.replace("+",""))

        let extraSkill5Attribute = document.getElementById("extraSkillAttrName5").querySelectorAll("h6")[0].innerText
        let extraSkill5BonusPoints = parseInt(document.getElementById("extraSkillBonusPoints5").querySelectorAll("h3")[0].innerText.replace("+",""))
        let extraSkill5MasteryPoints = parseInt(document.getElementById("extraSkillMasteryPoints5").querySelectorAll("h4")[0].innerText.replace("+",""))
        let extraSkill5FlatBonus = parseInt(document.getElementById("extraSkillFlatBonus5").querySelectorAll("h4")[0].innerText.replace("+",""))

        let strDie = parseInt(strengthDice.replace("d",""))
        let dexDie = parseInt(dexterityDice.replace("d",""))
        let intDie = parseInt(intelligenceDice.replace("d",""))
        let firstDiceRoll = 0
        let secondDiceRoll = 0
        let thirdDiceRoll = 0

        if (e.target.matches("#strengthName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll   
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll
            console.log(firstDiceRoll+secondDiceRoll)
        }
        if (e.target.matches("#swingName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice + "+" +  swingBonusPoints + strengthDice + "+" + swingMasteryPoints + "+" + swingFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < swingBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + swingMasteryPoints + "+" + swingFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + swingMasteryPoints + swingFlatBonus
        }
        if (e.target.matches("#springName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice + "+" +  springBonusPoints + strengthDice + "+" + springMasteryPoints + "+" + springFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < springBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + springMasteryPoints + "+" + springFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + springMasteryPoints + springFlatBonus
        }
        if (e.target.matches("#sprintName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice + "+" +  sprintBonusPoints + strengthDice + "+" + sprintMasteryPoints + "+" + sprintFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < sprintBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + sprintMasteryPoints + "+" + sprintFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + sprintMasteryPoints + sprintFlatBonus
        }
        if (e.target.matches("#graspName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice + "+" +  graspBonusPoints + strengthDice + "+" + graspMasteryPoints + "+" + graspFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < graspBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + graspMasteryPoints + "+" + graspFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + graspMasteryPoints + graspFlatBonus
        }
        if (e.target.matches("#enduranceName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + strengthDice + "+" + strengthBonusPoints + strengthDice + "+" +  enduranceBonusPoints + strengthDice + "+" + enduranceMasteryPoints + "+" + enduranceFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < strengthBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < enduranceBonusPoints; i++) {
                if (parseInt(Math.random()*(strDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + enduranceMasteryPoints + "+" + enduranceFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + enduranceMasteryPoints + enduranceFlatBonus
        }
        if (e.target.matches("#dexterityName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll   
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll
            console.log(firstDiceRoll+secondDiceRoll)
        }
        if (e.target.matches("#agilityName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice + "+" +  agilityBonusPoints + dexterityDice + "+" + agilityMasteryPoints + "+" + agilityFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < agilityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + agilityMasteryPoints + "+" + agilityFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + agilityMasteryPoints + agilityFlatBonus
        }
        if (e.target.matches("#reactionName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice + "+" +  reactionBonusPoints + dexterityDice + "+" + reactionMasteryPoints + "+" + reactionFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < reactionBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + reactionMasteryPoints + "+" + reactionFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + reactionMasteryPoints + reactionFlatBonus
        }
        if (e.target.matches("#stealthName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice + "+" +  stealthBonusPoints + dexterityDice + "+" + stealthMasteryPoints + "+" + stealthFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < stealthBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + stealthMasteryPoints + "+" + stealthFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + stealthMasteryPoints + stealthFlatBonus
        }
        if (e.target.matches("#handlingName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice + "+" +  handlingBonusPoints + dexterityDice + "+" + handlingMasteryPoints + "+" + handlingFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < handlingBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + handlingMasteryPoints + "+" + handlingFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + handlingMasteryPoints + handlingFlatBonus
        }
        if (e.target.matches("#perceptionName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + dexterityDice + "+" + dexterityBonusPoints + dexterityDice + "+" +  perceptionBonusPoints + dexterityDice + "+" + perceptionMasteryPoints + "+" + perceptionFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < dexterityBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < perceptionBonusPoints; i++) {
                if (parseInt(Math.random()*(dexDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + perceptionMasteryPoints + "+" + perceptionFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + perceptionMasteryPoints + perceptionFlatBonus
        }
        if (e.target.matches("#intelligenceName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll   
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll
            console.log(firstDiceRoll+secondDiceRoll)
        }
        if (e.target.matches("#insightName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice + "+" +  insightBonusPoints + intelligenceDice + "+" + insightMasteryPoints + "+" + insightFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + insightMasteryPoints + "+" + insightFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + insightMasteryPoints + insightFlatBonus
        }
        if (e.target.matches("#persuasionName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice + "+" +  persuasionBonusPoints + intelligenceDice + "+" + persuasionMasteryPoints + "+" + persuasionFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < persuasionBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + persuasionMasteryPoints + "+" + persuasionFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + persuasionMasteryPoints + persuasionFlatBonus
        }
        if (e.target.matches("#trickeryName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice + "+" +  trickeryBonusPoints + intelligenceDice + "+" + trickeryMasteryPoints + "+" + trickeryFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < trickeryBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + trickeryMasteryPoints + "+" + trickeryFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + trickeryMasteryPoints + trickeryFlatBonus
        }
        if (e.target.matches("#accuracyName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice + "+" +  accuracyBonusPoints + intelligenceDice + "+" + accuracyMasteryPoints + "+" + accuracyFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < accuracyBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + accuracyMasteryPoints + "+" + accuracyFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + accuracyMasteryPoints + accuracyFlatBonus
        }
        if (e.target.matches("#survivalName")) {
            rollerCard.classList.toggle("active")
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + intelligenceDice + "+" + intelligenceBonusPoints + intelligenceDice + "+" +  survivalBonusPoints + intelligenceDice + "+" + survivalMasteryPoints + "+" + survivalFlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < intelligenceBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < survivalBonusPoints; i++) {
                if (parseInt(Math.random()*(intDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText = firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + survivalMasteryPoints + "+" + survivalFlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + survivalMasteryPoints + survivalFlatBonus
        }
        if (e.target.matches("#extraSkillName1")) {
            rollerCard.classList.toggle("active")
            let currentDie
            let currentAttr
            if (extraSkill1Attribute == "STR") {
                currentDie = strDie
                currentAttr = strengthBonusPoints
            }
            if (extraSkill1Attribute == "DEX") {
                currentDie = strDie
                currentAttr = dexterityBonusPoints
            }
            if (extraSkill1Attribute == "INT") {
                currentDie = strDie
                currentAttr = intelligenceBonusPoints
            }
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + "d" + currentDie + "+" + currentAttr + "d" + currentDie + "+" +  extraSkill1BonusPoints + "d" + currentDie + "+" + extraSkill1MasteryPoints + "+" + extraSkill1FlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < currentAttr; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText =  firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + extraSkill1MasteryPoints + "+" + extraSkill1FlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + extraSkill1MasteryPoints + extraSkill1FlatBonus
        }
        if (e.target.matches("#extraSkillName2")) {
            rollerCard.classList.toggle("active")
            let currentDie
            let currentAttr
            if (extraSkill2Attribute == "STR") {
                currentDie = strDie
                currentAttr = strengthBonusPoints
            }
            if (extraSkill2Attribute == "DEX") {
                currentDie = strDie
                currentAttr = dexterityBonusPoints
            }
            if (extraSkill2Attribute == "INT") {
                currentDie = strDie
                currentAttr = intelligenceBonusPoints
            }
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + "d" + currentDie + "+" + currentAttr + "d" + currentDie + "+" +  extraSkill2BonusPoints + "d" + currentDie + "+" + extraSkill2MasteryPoints + "+" + extraSkill2FlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < currentAttr; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText =  firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + extraSkill2MasteryPoints + "+" + extraSkill2FlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + extraSkill2MasteryPoints + extraSkill2FlatBonus
        }
        if (e.target.matches("#extraSkillName3")) {
            rollerCard.classList.toggle("active")
            let currentDie
            let currentAttr
            if (extraSkill3Attribute == "STR") {
                currentDie = strDie
                currentAttr = strengthBonusPoints
            }
            if (extraSkill3Attribute == "DEX") {
                currentDie = strDie
                currentAttr = dexterityBonusPoints
            }
            if (extraSkill3Attribute == "INT") {
                currentDie = strDie
                currentAttr = intelligenceBonusPoints
            }
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + "d" + currentDie + "+" + currentAttr + "d" + currentDie + "+" +  extraSkill3BonusPoints + "d" + currentDie + "+" + extraSkill3MasteryPoints + "+" + extraSkill3FlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < currentAttr; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText =  firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + extraSkill3MasteryPoints + "+" + extraSkill3FlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + extraSkill3MasteryPoints + extraSkill3FlatBonus
        }
        if (e.target.matches("#extraSkillName4")) {
            rollerCard.classList.toggle("active")
            let currentDie
            let currentAttr
            if (extraSkill4Attribute == "STR") {
                currentDie = strDie
                currentAttr = strengthBonusPoints
            }
            if (extraSkill4Attribute == "DEX") {
                currentDie = strDie
                currentAttr = dexterityBonusPoints
            }
            if (extraSkill4Attribute == "INT") {
                currentDie = strDie
                currentAttr = intelligenceBonusPoints
            }
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + "d" + currentDie + "+" + currentAttr + "d" + currentDie + "+" +  extraSkill4BonusPoints + "d" + currentDie + "+" + extraSkill4MasteryPoints + "+" + extraSkill4FlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < currentAttr; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText =  firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + extraSkill4MasteryPoints + "+" + extraSkill4FlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + extraSkill4MasteryPoints + extraSkill4FlatBonus
        }
        if (e.target.matches("#extraSkillName5")) {
            rollerCard.classList.toggle("active")
            let currentDie
            let currentAttr
            if (extraSkill5Attribute == "STR") {
                currentDie = strDie
                currentAttr = strengthBonusPoints
            }
            if (extraSkill5Attribute == "DEX") {
                currentDie = strDie
                currentAttr = dexterityBonusPoints
            }
            if (extraSkill5Attribute == "INT") {
                currentDie = strDie
                currentAttr = intelligenceBonusPoints
            }
            document.getElementsByClassName("rollerEquation")[0].querySelectorAll("h4")[0].innerText = corePoints + "d" + currentDie + "+" + currentAttr + "d" + currentDie + "+" +  extraSkill5BonusPoints + "d" + currentDie + "+" + extraSkill5MasteryPoints + "+" + extraSkill5FlatBonus
            for (let i = 0; i < corePoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    firstDiceRoll++
                }
            }
            for (let i = 0; i < currentAttr; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    secondDiceRoll++
                }
            }
            for (let i = 0; i < insightBonusPoints; i++) {
                if (parseInt(Math.random()*(currentDie+1)) > 3) {
                    thirdDiceRoll++
                }
            }
            document.getElementsByClassName("rollerEquation")[1].querySelectorAll("h4")[0].innerText =  firstDiceRoll + "+" + secondDiceRoll + "+" + thirdDiceRoll + "+" + extraSkill5MasteryPoints + "+" + extraSkill5FlatBonus
            document.getElementsByClassName("rollerResult")[0].querySelectorAll("h1")[0].innerText = firstDiceRoll + secondDiceRoll + thirdDiceRoll + extraSkill5MasteryPoints + extraSkill5FlatBonus
        }
    })
}

rollerCard.addEventListener("click", e => {
    if (e.target.matches(".formTitle")) {
        rollerCard.classList.toggle("active")
    }
})
