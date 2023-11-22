// Array -> is a collection of variables
// Array VS Object -> arrays use numbered indexes. but, objects use named indexes.
/*
// creating an array with 20 variables
    var names = new Array(20);
    names[0] = "Anisul";
    names[1] = "Sonali";
    console.log(names[1]);

// creating an array with values
    var students = ["Anisul", "Sonali", "Priya", "Numan"];
    console.log("students = " + students);
    console.log("studnet at 2 index : " + students[2]);
    console.log("Length of student array : " + students.length);

//pusing an element in array
    students.push("musa");
    console.log("after pushing students = " + students);

//pusing an element in array
    students.pop("musa");
    console.log("after poping students = " + students);

    // concatenation of arrays
    var num1 = [10, 20];
    var num2 = [30, 40, 50, 60];
    var num = num1.concat(num2);
    console.log("After concatenation : " + num);
*/
    // Array methods program

    // you have already learned about pop(),push(),concat()
    // shift(), unshift(), splice(pos,noe,ele1,ele2..), splice(start INDEX,end INDEX), slice(4) 
    // shift(), unshift(), splice(pos,noe,ele1,ele2..), splice(start INDEX,end INDEX), slice(4)
    // sort(), reverse()
    /*
    var names = ["Mina","Rabeya","Kolpona","Anis"];
    var names = ["Mina", "Rabeya", "Kolpona", "Anis"];
    console.log(names);
    */

    // // shift opposite of pop
    // names.shift();
    // console.log(names);
    // // unshiftt opposite of push
    // names.unshift("Sagor");
    // console.log(names);
    // adding elements using splice
    // names.splice(2,1,"Karim","Rahim");
    // console.log(names);
    // removing elements using splice
    // names.splice(1,2);
    // console.log(names);

    // slice 
    // slice
    // var newArray = names.slice(1);
    // console.log(newArray)
    // console.log(names)
    // var sortedNames = names.sort();
    // names.reverse();
    // console.log(sortedNames)
    /*
    var numbers = [20, 5, 25, 45, 1];
    numbers.sort(function (a, b) {  //actullay sort method ta name ke sajate pa re tai num er ketre ei trix ta follow kora hoiche
    return b - a;
    });
    console.log(numbers);
    */

    /*
     numbers.sort(function(a,b){
        return b-a;
    */    


    // One Dimensional Array
    // Create a function called highestScore that will
    // Receive a 1d array called scores
    // return the highest score
    /*
    console.clear();
    function highestScore(scores) {
    var max = scores[0];
    for (var x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
        max = scores[x];
        }
    }
    return max;
    }

    var scores = [21, 98, 1, 88, 15];
    var maxScore = highestScore(scores);
    console.log(maxScore);
    */

    // 2D Array
    // Create a function called highestRunScorer that will
    // Receive a 2d array called playersInfo
    // Based on highest score, return the name of the player
    /*
    function highestRunScorer(playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (var x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
        highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
    }
    var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 25],
    ["Rakib", 45],
    ["lu", 105],
    ];
    var x = highestRunScorer(playersInfo);
    console.log(x);
    */
    
    //how to create an object cons and
    //adding fuction inside a constructor
    /*
    function Student(name,age,cgpa,lang){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
        this.lang=lang;

        this.display= function(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.cgpa);
            console.log(this.lang);
        }
    } 

    var student1 =new Student("jishad",23,3.60,["eng","bangla"]);
    var student2 =new Student("jishjjad",236,3.606,["eng","bangla"]);

    student1.display();
    student2.display();
    */