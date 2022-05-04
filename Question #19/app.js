let MyObject={"countries":[
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

var count = 0;
for (var key in MyObject) {
    if (MyObject.hasOwnProperty(key)) {
        count += MyObject[key].length;
    }
}
console.log(count);