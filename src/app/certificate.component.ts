import { Component, Input } from '@angular/core';

@Component({
    selector: 'certificate',
    templateUrl: './certificate.component.html',
})

export class CertificateComponent {
    @Input() module;

    pdfCertificate(q, data) {/*
  var leftMargin = 15; //left margin in mm
  var rightMargin = 15; //right margin in mm
  var widthOfPDF = 210;  // width of page in mm
  var heightOfPDF = 295; //height of page
  var topMargin = 20;
  var bottomMargin = 20;
  var pageBreak = heightOfPDF - topMargin - bottomMargin; //will determine when new page should be made
  var lineBreak = widthOfPDF - leftMargin - rightMargin;  //will determine when new line should be made

  var doc = new jsPDF("p", "mm", "a4");

  doc.setFontSize(20);
  doc.text("Security Injections @ Towson", leftMargin, topMargin);
  doc.line(10, 25, 190, 25);
  doc.setFontSize(12);
  doc.text("Module: " + data.course, 20, 35);	// COURSE
  doc.text("Student: " + data.name, 20, 45);		// NAME
  doc.text("Date: " + data.today, 20, 55);		// DATE
  doc.text("ID: " + data.hash, 20, 65);		// ID

  //doc.addImage(img, 'PNG', 10, 10, 190, 132);
  doc.addPage();
  doc.setFontSize(20);
  doc.text("Discussion Questions", leftMargin, topMargin);
  doc.line(10, 25, 190, 25);
  topMargin = 40; //setting up for question and answer loop
  for (i in q) {
    if (topMargin > pageBreak) {
      doc.addPage();
      topMargin = 20;
    }
    doc.setFontSize(16);
    var prompt = doc.splitTextToSize(q[i].prompt, lineBreak); //returns an array of strings for each line
    var promptLines = prompt.length;
    doc.text(leftMargin, (topMargin), prompt);
    topMargin = topMargin + ((5.6444 * promptLines) + 10); //5.64 is 16pt font converted to mm

    doc.setFontSize(12);
    var answer = doc.splitTextToSize(q[i].answer, lineBreak - 20);
    var answerLines = answer.length;
    doc.text(leftMargin + 20, (topMargin), answer);
    topMargin = topMargin + ((4.2333 * answerLines) + 10); //4.233 is 12 pt font converted to mm
  }

  dataUri = doc.output('datauristring'); //makes a uristring for iframe

  this.detailFrame = $sce.trustAsResourceUrl(dataUri); //found this neccessary for iframe to display in angular
*/
    }

    /**
     * method to generate the user's completion certificate
     * and also update our database
     *
     * NETWORK: sends POST 'request' to server with everything the database wants
     */
    generateCertificate() {/*
  // Step 1: Get module/variant into printable string.
  var course = this.module.name + " - " + this.module.variant;

  // Step 2: Get the time into a printable format.
  // SOURCE: http://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
  var now = new Date();
  var dd = now.getDate();
  var mm = now.getMonth() + 1; //January is 0!
  var yyyy = now.getFullYear();
  if (dd < 10) { dd = '0' + dd } // force date to be 2 digits
  if (mm < 10) { mm = '0' + mm } // force month to be 2 digits
  var today = mm + '/' + dd + '/' + yyyy;

  // Step 3: Produce a hash-string id using all this info.
  // SOURCE: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  var to_hash = this.form.name + course + today;
  var hash = 0;
  if (to_hash.length == 0) return hash;
  for (i = 0; i < to_hash.length; i++) {
    char = to_hash.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  hash = Math.abs(hash);


  // Step 4: Draw the certificate user data.
  var draw_data = {
    'name': this.form.name,
    'course': course,
    'hash': hash,
    'today': today
  }

  for (i in this.module.sections) {
    if (this.module.sections[i].header == "Discussion Questions") {
      pageIndex = i;
    }
  }

  var discussionQuestions = [];
  for (q in this.module.sections[pageIndex].units) {
    unit = this.module.sections[pageIndex].units[q];
    if (unit.type == "question") {
      if (unit.mode == "textarea") {
        if (unit.value != null) {
          discussionQuestions[q] = { prompt: unit.prompt, answer: unit.value };
        }
      }
    }
  }

  pdfCertificate(discussionQuestions, draw_data);
  finalPDF = this.detailFrame


  // Step 6: Make certificate available for download

  $("#si-certificate-link").attr('href', finalPDF);
  $('#si-certificate-link').prop('disabled', false);
  $('#si-certificate-pane').show();


  // Step 7: Post info to database
  this.form['modulename'] = this.module.name;
  this.form['variant'] = this.module.variant;
  this.form['date'] = now.toJSON();
  this.form['score'] = JSON.stringify(this.score);
  // TODO: make sure this.form content is securely encrypted. Student email is private info
  $http.post(this.repo + 'record', this.form);
  */
    }
}