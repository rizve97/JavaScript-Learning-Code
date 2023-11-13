const coding = ["Js", "Python", "C++", "Php", "Ruby"]

coding.forEach( function (item){

    //console.log(item)
})

coding.forEach(  (item, index, arr)=> {

    //console.log(item, index, arr)
})

const some1 = [
    {
      
    languageName: "python",
    languageFramework: "Django"
    },
        
      {
        languageName: "php",
        languageFramework: "Laravel"
    },

    {
        languageName: "Js",
        languageFramework: "React"
    },
]

some1.forEach( (item) => {
    
    console.log(item.languageFramework);
} )

