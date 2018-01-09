import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  module = {
    "name": "Integer Error",
    "variant": "CS0 C++",
    "objectives": {
      "goals": [
        "Introduce the risks and mitigation methods associated with integer overflow for introductory CS students"
      ],
      "outcomes": [
        "Describe integer errors and the risk associated with them",
        "Identify the techniques to avoid an integer error",
        "Evaluate mathematical operations that might lead to an overflow",
        "Inspect code for segments that might lead to vulnerabilities",
        "Appraise a problem and discuss the implications of integer overflow"
      ]
    },
    "sections": [
      {
        "header": "Background",
        "units": [
          {
            "type": "subheader",
            "text": "Summary"
          },
          {
            "type": "paragraph",
            "text": "Integer values that are too large or too small may fall outside the allowable range for their data type, leading to undefined behavior that can both reduce the robustness of your code and lead to security vulnerabilities."
          },
          {
            "type": "image",
            "src": "http://imgs.xkcd.com/comics/cant_sleep.png",
            "alt": "*XKCD Comic*",
            "width": 740,
            "height": 244,
            "float": null
          },
          {
            "type": "attribution",
            "copyright": "XKCD",
            "date": "2017",
            "link": "http://imgs.xkcd.com/comics/cant_sleep.png"
          },
          {
            "type": "subheader",
            "text": "Description"
          },
          {
            "type": "paragraph",
            "text": "Declaring a variable as type <strong>int</strong> allocates a fixed amount of space in memory. Most languages include several integer types, including <strong>short</strong>, <strong>int</strong>, <strong>long</strong>, etc. , to allow for less or more storage. The amount of space allocated limits the range of values that can be stored. For example, a 32-bit <strong>int</strong> variable can hold values from -2<sup>31</sup> through 2<sup>31</sup>-1."
          },
          {
            "type": "paragraph",
            "text": "Input or mathematical operations such as addition, subtraction, and multiplication may lead to values that are outside of this range. This results in an integer error or overflow, which causes undefined behavior and the resulting value will likely not be what the programmer intended. Integer overflow is a common cause of software errors and vulnerabilities."
          },
          {
            "type": "subheader",
            "text": "Risk - How can it happen?"
          },
          {
            "type": "paragraph",
            "text": "An integer error can lead to unexpected behavior or may be exploited to cause a program crash, corrupt data, lead to incorrect behavior, or allow the execution of malicious software."
          },
          {
            "type": "image",
            "src": "http://4.bp.blogspot.com/-58kvuzDhzus/TWgnjsyE-7I/AAAAAAAAAG4/0HijRxwS8Ew/s1600/group+reaches+s.png",
            "alt": "*Facebook group image*",
            "width": 378,
            "height": 275,
            "float": null
          },
          {
            "type": "attribution",
            "copyright": "Facebook",
            "date": "2017",
            "link": "http://4.bp.blogspot.com/-58kvuzDhzus/TWgnjsyE-7I/AAAAAAAAAG4/0HijRxwS8Ew/s1600/group+reaches+s.png"
          },
          {
            "type": "subheader",
            "text": "Real-world Examples"
          },
          {
            "type": "list",
            "items": [
              "There is a Facebook group called 'If this group reaches 4,294,967,296 it might cause an integer overflow.' This value is the largest number that can fit in a 32 bit unsigned integer. If the number of members of the group exceeded this number, it might cause an overflow. Whether it will cause an overflow or not depends upon how Facebook is implemented and which language is used – they might use data types that can hold larger numbers. In any case, the chances of an overflow seem remote, as roughly 2/3 of the people on earth would be required to reach the goal of more than 4 billion members.",
              "On December 25, 2004, Comair airlines was forced to ground 1,100 flights after its flight crew scheduling software crashed. The software used a 16-bit integer (max 32,768) to store the number of crew changes. That number was exceeded due to bad weather that month which led to numerous crew reassignments."
            ],
            "ordered": true
          },
          {
            "type": "question",
            "id": "memory",
            "prompt": "Declaring a variable as type integer:",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "infinite",
                "text": "allocates an infinite amount of storage"
              },
              {
                "id": "fixed",
                "text": "allocates a fixed amount of storage"
              }
            ],
            "answer": "fixed"
          },
          {
            "type": "question",
            "id": "effect",
            "prompt": "An integer error in C++ causes:",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "syntax",
                "text": "a syntax error"
              },
              {
                "id": "correction",
                "text": "the program to correct itself"
              },
              {
                "id": "unexpected",
                "text": "unexpected behavior"
              }
            ],
            "answer": "unexpected"
          }
        ]
      },
      {
        "header": "Code Responsibly",
        "units": [
          {
            "type": "subheader",
            "text": "How can I avoid an Integer Error?"
          },
          {
            "type": "list",
            "items": [
              "<em>Know your limits:</em> Familiarize yourself with the ranges available for each data type. With languages such as C and C++, the sizes of the data types are machine and compiler dependent.",
              "<em>Choose your data types wisely:</em> Many programming languages contain multiple data types for storing integer values. If you have any concerns about the integer values that you will be using, learn about the options available in the language you are using, and choose integer types that are large enough to hold the values you will be using.",
              "<em>Validate your input:</em> Check input for range and reasonableness before conducting operations (more on this later)"
            ],
            "ordered": true
          },
          {
            "type": "question",
            "id": "avoid",
            "prompt": "How can you avoid integer error in your program?",
            "ignored": false,
            "mode": "checkbox",
            "choices": [
              {
                "id": "bounds",
                "text": "Know the smallest and largest allowable values for each data type in the programming language you are using.",
                "ans": true
              },
              {
                "id": "float",
                "text": "Always pick float or double as the data types for numbers.",
                "ans": false
              },
              {
                "id": "check",
                "text": "Check your input for reasonable values before conducting mathematical operations.",
                "ans": true
              }
            ]
          }
        ]
      },
      {
        "header": "Laboratory Assignment",
        "units": [
          {
            "type": "paragraph",
            "text": "<strong>STEP 1:</strong> Type Program 1 and compile. Run and enter reasonable values."
          },
          {
            "type": "subheader",
            "text": "Program 1"
          },
          {
            "type": "codeblock",
            "code": "./program1.cpp"
          },
          {
            "type": "question",
            "id": "largest",
            "prompt": "Look at the output. What is the largest possible value of type <strong>int</strong> the program can handle?",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "1",
                "text": "2,147,483,647"
              },
              {
                "id": "2",
                "text": "32,767"
              },
              {
                "id": "3",
                "text": "2,147,483,648"
              },
              {
                "id": "4",
                "text": "1,000,000"
              }
            ],
            "answer": "1"
          },
          {
            "type": "paragraph",
            "text": "<strong>STEP 2</strong> Remove the comment lines: /* and */. Compile and run again."
          },
          {
            "type": "question",
            "id": "error-million",
            "prompt": "Enter 1000000 (1 million): did you get an error?",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "y",
                "text": "Yes"
              },
              {
                "id": "n",
                "text": "No"
              }
            ],
            "answer": "n"
          },
          {
            "type": "question",
            "id": "error-billion",
            "prompt": "Enter 2000000000 (2 billion): did you get an error?",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "y",
                "text": "Yes"
              },
              {
                "id": "n",
                "text": "No"
              }
            ],
            "answer": "y"
          },
          {
            "type": "question",
            "id": "error-ten-billion",
            "prompt": "Enter 10000000000 (10 billion): did you get an error?",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "y",
                "text": "Yes"
              },
              {
                "id": "n",
                "text": "No"
              }
            ],
            "answer": "y"
          },
          {
            "type": "question",
            "id": "can-cause",
            "prompt": "Which of the following operations can lead to an integer error?",
            "ignored": false,
            "mode": "checkbox",
            "choices": [
              {
                "id": "plus",
                "text": "Addition",
                "ans": true
              },
              {
                "id": "minus",
                "text": "Subtraction",
                "ans": true
              },
              {
                "id": "times",
                "text": "Multiplication",
                "ans": true
              }
            ]
          },
          {
            "type": "question",
            "id": "will-cause",
            "prompt": "Which of the operations listed in the previous question is most likely to cause an integer error?",
            "ignored": false,
            "mode": "radio",
            "choices": [
              {
                "id": "plus",
                "text": "Addition"
              },
              {
                "id": "minus",
                "text": "Subtraction"
              },
              {
                "id": "times",
                "text": "Multiplication"
              }
            ],
            "answer": "times"
          }
        ]
      },
      {
        "header": "Security Checklist",
        "units": [
          {
            "type": "checklist",
            "id": "Pgm1CL",
            "list": [
              {
                "id": "var",
                "header": "Check each line of code:",
                "items": [
                  {
                    "id": "var",
                    "text": "Click each declaration of an integer variable.",
                    "ans": true,
                    "js": true
                  }
                ]
              },
              {
                "id": "vuln",
                "header": "For each variable:",
                "items": [
                  {
                    "id": "input",
                    "text": "Click all input operations that assign values to the variable.",
                    "ans": true,
                    "js": true
                  },
                  {
                    "id": "math",
                    "text": "Click all mathematical operations involving the variable.",
                    "ans": true,
                    "js": true
                  },
                  {
                    "id": "assign",
                    "text": "Click all assignments made to the variable.",
                    "ans": true,
                    "js": true
                  }
                ]
              }
            ],
            "code": "./program1checklist.html",
            "javascript": "./checklist.js"
          },
          {
            "type": "paragraph",
            "text": "Highlighted areas indicate vulnerabilities."
          }
        ]
      },
      {
        "header": "Discussion Questions",
        "units": [
          {
            "type": "question",
            "id": "largest",
            "prompt": "What is the largest possible value of type int? Explain your answer using the information you read in the Background section.",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "operation",
            "prompt": "What happens when the result of an operation on values of type int exceeds this value ? Explain.",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "popUS",
            "prompt": "Look up the population of the United States:",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "popEarth",
            "prompt": "Look up the population of the world:",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "debtUS",
            "prompt": "Look up the United States's national debt:",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "problem",
            "prompt": "For which of these would the int data type be a problem: Population of the US, population of the world or US national debt?",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          },
          {
            "type": "question",
            "id": "Comair",
            "prompt": "Discuss the Comair problem described in background section. What are the repercussions of such a problem?",
            "ignored": true,
            "mode": "textarea",
            "pattern": null
          }
        ]
      }
    ]
  }

  currentsectionIndex;
  currentsection;
  sectionscompleted;
  doneLoading = false;

  constructor(private http: Http) {
    this.initialize();
  }
  ngOnInit(){
    //this.loadJSON();
    this.doneLoading = true;
    
  }


  /**
     * helper method to initialize module object
     *
     * PARAMETERS: content - object containing all content for module
     */
  initModule(content) {

    this.module = content;
    this.module.sections.push({ header: 'Final Page', units: undefined });		// section for completion page
    if (content.hasOwnProperty('objectives')) {
      this.module.sections.splice(0, 0, { header: 'Learning Objectives', units: undefined });
      this.currentsectionIndex = 1;
      this.currentsection = this.module.sections[1];
    } else {
      this.currentsectionIndex = 0;
      this.currentsection = this.module.sections[0];
    }
    // on Module load attempt to fill with cookies and redirect if needed
    this.getCookies();
  }

  /**
   * helper method to initialize score object
   *
   * PARAMETERS: content - object containing all content for module
   */
  /*
  initScore(content) {
    this.score = {							// initialize score report
      name: content.name,
      variant: content.variant,
      sections: []
    };

    for (let i = 1; i < content.sections.length - 1; i++) {				// each section has header, time...
      const section = { header: content.sections[i].header, time: 0, questions: {} };
      console.log(content);
      for (let j = 0; j < content.sections[i].units.length; j++) {	// ...and (question_id : # of attempts) pairs
        const unit = content.sections[i].units[j];
        if ((unit.type === 'question' && !unit.ignored) || unit.type === 'checklist') {
          section.questions[unit.id] = 1;	// all graded questions are "attempted" at least once
        }
      }

      this.score.sections.push(section);
    }
  }
  */

  /**
   * method to initialize module content
   *
   * NETWORK: sends GET request to server, for JSON content
   *
   * GET content from server
   * IF server responds, use that content
   * ELSE
   * 	IF page has default content, use that content
   * 	ELSE show error
   */
  loadContent = function () {
    // JSON location on server
    // const request = this.repo + this.module.name + '/' + this.module.variant + '.json';
    const request = '/src/assets/content.json';
    console.log('Loading content from ' + request);

    this.contentError = false;	// assume content is loaded, until it isn't
    this.initModule(this.module);
    //this.initScore(this.module);
    /*
    this.http.get(request).map((response) => {
      // Recieved
      this.initModule(response.data);
      this.initScore(response.data);
    }).catch((err) => {
      // Not recieved
      if ($("#default").length) {				// module has 'default' JSON content
        console.log('* No response - using default');
        const content = JSON.parse($('#default').html());

        this.initModule(content);
        this.initScore(content);

      } else {								// no content to work with
        console.log('* No response - try again');
        this.contentError = true;
      }
    });
    */
  }

  // initialize all non-function fields
  initialize() {
    //this.repo = 'http://cis1.towson.edu/~cyber4all/modules/content/';		// IP address of our production server TODO: change as needed
    this.sectionscompleted = 1;				// start from the first section
    this.loadContent();						// initialize module object and contentError boolean
    this.loadCoverPage();
    //this.form = {};							 // initialize submission form
    //this.starttime = new Date();				// initialize start time, to track each section's completion time
  }

  redirectCookie() {/*
    const progressCookie = $cookies.get(this.moduleCookie + 'progress');
    this.sectionscompleted = parseInt(progressCookie);
    this.currentsectionIndex = this.sectionscompleted;
    this.currentsection = this.module.sections[this.currentsectionIndex];*/
  }

  /**
   * This method should retrieve all cookies.
   */
  getCookies() {/*
    this.moduleCookie = this.module.name + "-" + this.module.variant + "-";

    if ($cookies.get(this.moduleCookie + 'progress') != null) {
      this.redirectCookie();
    }

    let cookieAnswer = $cookies.getObject(this.moduleCookie + 'forms');
    let n = 0;
    if (typeof (cookieAnswer) === 'undefined') {
      console.log("No cookies to be loaded");
    }
    else {
      for (let i = 0; i < this.module.sections.length; i++) {
        for (let q = 0; q < this.module.sections[i].units.length; q++) {
          const unit = this.module.sections[i].units[q];
          if (unit.type === 'question') {
            switch (unit.mode) {
              case 'radio':
                if (cookieAnswer[n] != null && cookieAnswer[n].prompt === unit.prompt) {
                  for (let c of unit.choices) {
                    if (unit.choices[c].id === cookieAnswer[n].answer) {
                      unit.checked = true;
                      unit.value = cookieAnswer[n].answer;
                    }
                  }
                  n++;
                }
                break;
              case 'checkbox':
                if (cookieAnswer[n] != null) {
                  for (let c of unit.choices) {
                    if (unit.choices[c].id == cookieAnswer[n].prompt[c]) {
                      if ((cookieAnswer[n].answer[c] == true)) {
                        unit.choices[c].value = true;
                      }
                      else unit.choices[c].value = false;
                    }

                  }
                  n++;
                }
                break;
              case 'textarea':
                if (cookieAnswer[n] != null && cookieAnswer[n].prompt == unit.prompt) {
                  unit.value = cookieAnswer[n].answer;
                  n++;
                }
                break;
            }
          }
          else if (unit.type == "checklist") {
            //Having trouble with checklist. Disregading for now
            /*if(cookieAnswer[n]!=null){
              for (j in unit.list) {
                group = unit.list[j];
                group_id = unit.id+"-"+group.id;

                for (k in group.items) {
                  item = group.items[k];
                  item_id = group_id+"-"+item.id;


                  if (item_id == cookieAnswer[n].prompt[k]){
                    item.value = cookieAnswer[n].answer[k];
                  }
                  else{
                    item.value = false;
                  }
                  //console.log(item.value + "          "+ cookieAnswer[n].answer[k]);
                  //console.log(item_id+"    "+cookieAnswer[n].prompt[k]);
                }
              }
              n++;
            }
            //END CHECKLIST DISREGARD

          }
        }
      }
    }*/
  }

  /*
   * functionality to save and progress to cookies (or decide to not bother)
   *  information we want is contained in
   * 		this.module.sections[each].units[each whose type is 'question' and mode is 'textarea']
   * 			.prompt
   * 		and .value
   *
   */
  saveCookie(completed) {/*
    let today = new Date();
    let expireTime = new Date(today);
    expireTime.setMinutes(today.getMinutes() + 120);//expires in 5 hours

    $cookies.put(this.moduleCookie + 'progress', completed, { 'expires': expireTime });
    $cookies.putObject(this.moduleCookie + 'forms', []);
    for (i in this.module.sections) {
      for (q in this.module.sections[i].units) {
        unit = this.module.sections[i].units[q];
        if (unit.type == "question") {

          switch (unit.mode) {
            case "radio":

              var answers = $cookies.getObject(this.moduleCookie + 'forms');
              answers.push({ prompt: unit.prompt, answer: unit.value });
              $cookies.putObject(this.moduleCookie + 'forms', answers);
              break;

            case "checkbox":
              var answers = $cookies.getObject(this.moduleCookie + 'forms');
              var checked = [];
              var ids = [];
              for (c in unit.choices) {
                if (!(typeof (unit.choices[c].value) === 'undefined') && !unit.ignored) {
                  ids.push(unit.choices[c].id);
                  checked.push(unit.choices[c].value);
                }
              }
              answers.push({ prompt: ids, answer: checked });
              $cookies.putObject(this.moduleCookie + 'forms', answers);

              break;

            case "textarea":
              var answers = $cookies.getObject(this.moduleCookie + 'forms');
              answers.push({ prompt: unit.prompt, answer: unit.value });
              $cookies.putObject(this.moduleCookie + 'forms', answers);
              break;
          }
        }

        else if (unit.type == "checklist") {
          //Again checklist is being saved proper.... Not loading right.
          /*
          var answers = $cookies.getObject('forms');
          var checked = [];
          var ids = [];
          for (j in unit.list) {
            group = unit.list[j];
            group_id = unit.id+"-"+group.id;

            for (k in group.items) {
              item = group.items[k];
              item_id = group_id+"-"+item.id;

              // if checkbox hasn't been touched, angular thinks it is undefined
              if(typeof(item.value)==='undefined') checked.push(false);
              else if (item.value == false) checked.push(false);
              else if (item.value == true) checked.push(true);

              //if(item.js) item.value = $(item_id).is(':checked');

              ids.push(item_id);
              console.log("ID PUSHED : "+ item_id);
              //checked.push(item.value);
              console.log("VAL PUSHED "  + item.value+"------------");
            }
          }

          answers.push({prompt:ids, answer:checked});
          $cookies.putObject('forms',answers);
      }
      //END COMMENT
        }
      }
    }*/
  }
  gotoSection(i) {
    if (i <= this.sectionscompleted) {
      this.currentsectionIndex = i;
      this.currentsection = this.module.sections[i];
      //this.saveCookie(this.sectionscompleted);
    } else {
      console.log('Cannot go to section ' + i + ': may only go up to section ' + this.sectionscompleted);
    }
    $('body').animate({ scrollTop: 0 }, 500);
  }
  

  /**
   * Simple form of certificate, without Towson logo or fancy placement
   * TODO: prettify this

  defaultCertificate(ctx, data) {
    // white background
    ctx.beginPath();
    ctx.rect(0, 0, 500, 348);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    // header
    ctx.font = "20px Arial";
    ctx.fillText("Security Injections @ offline", 20, 30);
    ctx.beginPath();
    ctx.moveTo(20, 40);
    ctx.lineTo(150, 40);
    ctx.stroke();

    ctx.font = "12px Arial";
    ctx.fillText("Module: " + data.course, 20, 60);	// COURSE
    ctx.fillText("Student: " + data.name, 20, 80);		// NAME
    ctx.fillText("Date: " + data.today, 20, 100);		// DATE
    ctx.fillText("ID: " + data.hash, 20, 120);		// ID
  }


  /**
   * Pretty form of certificate, only available with connection to our server
  
  prettyCertificate(ctx, data, img) {
    ctx.drawImage(img, 0, 0);

    ctx.font = "12px Arial";
    ctx.textAlign = "left";
    ctx.fillText(data.name, 27, 140);		// NAME
    ctx.fillText(data.course, 27, 190);		// COURSE
    ctx.textAlign = "center";
    ctx.fillText(data.hash, 126, 300);		// ID
    ctx.fillText(data.today, 366, 300);		// DATE
  }
*/
  

  trustSrc = (src) => {/*
  return $sce.trustAsResourceUrl(src);*/
  }

  loadCoverPage() {/*
  var coverPageUri = this.repo + $("#name").html() + '/' + "coverpage.pdf";
  this.coverPageFrame = $sce.trustAsResourceUrl(coverPageUri);*/
  }

}
