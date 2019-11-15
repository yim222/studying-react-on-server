import  React, {Component} from 'react';

 class LearningExample extends React.Component{

   constructor(props){
     super()

     this.consoleDraft = this.consoleDraft.bind(this);
     this. original = "original value "

     this.state = {
       a : this. original

     }
      console.log ("this.state.a =" + this.state.a + " || originial (statefrom) = " + this.original);;
   }


   consoleDraft(){

     console.log("I am consoleDraft");

     var x = "10";
     var y =x;

     console.log("x = " + x + " y = " + y);

     y="30";
     console.log("x = " + x + " y = " + y);

     var  obj11 = function()

     {return {
       a:10,
       b:20
     }};

     var obj1 = new obj11();
     var obj2 = obj1;

     console.log ("obj1.a = " +obj1.a+  " obj2.a = " + obj2.a );

     obj2.a = "30";
     console.log ("obj1.a = " +obj1.a+  " obj2.a = " + obj2.a );

     obj1.a = "40";
     console.log ("obj1.a = " +obj1.a+  " obj2.a = " + obj2.a );


     var obj3 = new obj11;

     console.log ("obj1.a = " +obj1.a+  " obj2.a = " + obj2.a + " obj3.a = " + obj3.a);
     //const object2 = Object.assign({c: 4, d: 5}, object1);
     var obj4 = Object.assign({a: 0, d: 0}, obj2);
     console.log ("obj2.a = " +obj2.a+  " obj4.a = " + obj4.a );
     obj4.a = 500;
     console.log ("obj2.a = " +obj2.a+  " obj4.a = " + obj4.a );



   }

   componentDidMount(){

   }

   render() {

     const Foo = ()=> <div>Hi</div>
     console.log ( "???")
     console.log(typeof <Foo/>);




       const greeting = {
         subject: 'React',
         description: 'Your component library for a...',
       };

       return (
         <div>
           <Greeting greeting={greeting} />
           {this.consoleDraft()}

           <h2>This is draft ? </h2>


         </div>
       );
     }
   }

   const Greeting = ({ greeting }) =>
     <div>
       <Title title={`Welcome to ${greeting.subject}`} />
       <Description description={greeting.description} />
     </div>

   const Title = ({ title }) =>
     <h1>{title}</h1>;

   const Description = ({ description }) =>
     <p>{description}</p>;
export default LearningExample;
