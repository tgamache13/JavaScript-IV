// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
        this.name = attrs.name
        this.age = attrs.age
        this.location = attrs.location
    }
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.speciality = instructorAttrs.speciality
        this.favLanguage = instructorAttrs.favLanguage
        this.catchPhrase = instructorAttrs.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${this.name} receives a perfect score on ${subject}.`;

    }
}

class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground
        this.className = studentAttrs.className
        this.favSubjects = studentAttrs.favSubjects
    }
    listsSubjects(){
        return this.favSubjects.join("  ");
    }
      
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor{
    constructor(projManAttrs){
        super(projManAttrs);
        this.gradClassName = projManAttrs.gradClassName
        this.favInstructor = projManAttrs.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel} , @channel standy times!`;
    }
    debugs(studentObj, subject){
        return `${this.name} degbugs ${studentObj}'s code on ${subject}`;
    }
}

const personOne = new Person({
    name: 'Tara',
    age: 44,
    location: 'Grants Pass',
  })

  const personTwo = new Person({
    name: 'Bob',
    age: 53,
    location: 'Eugene',
  })

  const personThree = new Person({
    name: 'Sierra',
    age: 27,
    location: 'Grants Pass',
  })

  const instructorOne = new Instructor({
    name: 'Billy',
    age: 40,
    location: 'Seattle',
    speciality: 'Redux',
    favLanguage: 'Python',
    catchPhrase: 'Leave no one behind!'
  })
  const instructorTwo = new Instructor({
    name: 'Jeff',
    age: 38,
    location: 'Ocala',
    speciality: 'CSS',
    favLanguage: 'Ruby',
    catchPhrase: 'Hind sight is always 20/20!'
  })
  const instructorThree = new Instructor({
    name: 'Jill',
    age: 29,
    location: 'Boston',
    speciality: 'React',
    favLanguage: 'C++',
    catchPhrase: 'Living well is your best revenge!'
  })

  const studentOne = new Student({
    name: 'Taylor',
    age: 23,
    location: 'Central Point',
    previousBackground: 'cosmotolgy',
    className: 'Web54',
    favSubjects: ['Javascript', 'HTML', 'Redux', 'Node']
  })

const studentTwo = new Student({
    name: 'Dusty',
    age: 19,
    location: 'Crescent City',
    previousBackground: ' Worked at Carls Jr as a shift lead.',
    className: 'Web55',
    favSubjects: ['CSS', 'Javascript', 'React', 'Node']
  })
  const studentThree = new Student({
    name: 'Stacy',
    age: 25,
    location: 'Redding',
    previousBackground: 'Worked at a mill.',
    className: 'Web50',
    favSubjects: ['HTML', 'Node', 'Web Applications', 'Javascript']
  })

  const projManOne = new ProjectManager({
    name: 'Kyle',
    age: 31,
    location: 'Austin',
    speciality: 'Node',
    favLanguage: 'Pascal',
    catchPhrase: 'Fake it til you make it!',
    gradClassName: 'Web2',
    favInstructor: 'Jill',
  })

  const projManTwo = new ProjectManager({
    name: 'Ayden',
    age: 45,
    location: 'Denver',
    speciality: 'Algorithims',
    favLanguage: 'COBOL',
    catchPhrase: 'Charge!!!!!!',
    gradClassName: 'Web4',
    favInstructor: 'Billy',
  })
  const projManThree = new ProjectManager({
    name: 'Addie',
    age: 23,
    location: 'Madison',
    speciality: 'Data Structures',
    favLanguage: 'Basic',
    catchPhrase: 'Whatevers clever!!',
    gradClassName: 'Web4',
    favInstructor: 'Jeff',
  })

  console.log(personOne.speak());
  console.log(instructorOne.demo('Web-Fundamentals'));
  console.log(instructorThree.grade(studentOne, 'Hash tables'));
  console.log(studentOne.listsSubjects());
  console.log(studentThree.PRAssignment('closure'));
  console.log(studentTwo.sprintChallenge('methods'));
  console.log(projManOne.standUp('Web 50'));
  console.log(projManThree.debugs(studentTwo.name, 'styling'));
