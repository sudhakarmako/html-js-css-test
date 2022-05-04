let obj={"countries":[
    {
        "name":"USA",

        "grandfathers":[
            {
                "gFName":"Steve",
                "grandfathersKid":[
                    {
                        "gFKName": "Linda",
                        "kid": [{
                            "name": "Steve JR", 
                            "friends": [{
                                "name": "Kriss|John|Martin|Steven"
                            }]
                        }
                        ]
                    }

                ]
            }
        ]
    },
    {
     name: "Canada",
     people: [
       {
          name: "Steve",
          children: [
            {
               name: "Linda",
               children: [
                 {
                    name: "Steve, Jr.",
                    friends: [
                      {
                         name: "Kriss"
                      }
                      //, more friends
                    ]
                 }
                 //, more grandchildren
               ]
            }
            //, more parents
          ]
       }
       //, more grandparents
     ]
   }
]}
// console.log("obj",Object.keys(obj.countries))

console.log("tttt",Object.keys(obj.countries).length)
