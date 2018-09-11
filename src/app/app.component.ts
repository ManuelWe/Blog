import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 0; // mainPage = 0 articles = 1
  articleHeader;
  articlePicture;
  articleText;
  articleAuthor;
  articleAuthorPicture;
  articleDate;
  readMore() {
    this.page = 1;
    this.articleHeader = 'Super fancy Überschrift';
    this.articlePicture = 'https://mdbootstrap.com/img/Photos/Others/images/81.jpg'
    this.articleText = 'Lorem ipsum dolor sit amet, consetetur ' +
      'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ' +
      'labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
      'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ' +
      'gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ' +
      'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata ' +
      'sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, ' +
      'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero' +
      ' eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ' +
      'gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ' +
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam' +
      ' nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat, sed diam voluptua. At vero eos et accusam et justo duo dolores' +
      ' et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus ' +
      'est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ' +
      'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt' +
      ' ut labore et dolore magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd' +
      ' gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
      '   \n' +
      '\n' +
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit ' +
      'esse molestie consequat, vel illum dolore eu feugiat nulla facilisis' +
      ' at vero eros et accumsan et iusto odio dignissim qui blandit' +
      ' praesent luptatum zzril delenit augue duis dolore te feugait nulla ' +
      'facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,' +
      ' sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ' +
      'aliquam erat volutpat.   \n' +
      '\n' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
      ' suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem' +
      ' vel eum iriure dolor in hendrerit in vulputate velit esse molestie' +
      ' consequat, vel illum dolore eu feugiat nulla facilisis at vero eros ' +
      'et accumsan et iusto odio dignissim qui blandit praesent luptatum ' +
      'zzril delenit augue duis dolore te feugait nulla facilisi.   \n' +
      '\n' +
      'Nam liber tempor cum soluta nobis eleifend option congue nihil ' +
      'imperdiet doming id quod mazim placerat facer possim assum. Lorem ' +
      'ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy ' +
      'nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ' +
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper ' +
      'suscipit lobortis nisl ut aliquip ex ea commodo consequat.   \n' +
      '\n' +
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit ' +
      'esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   \n' +
      '\n' +
      'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita ' +
      'kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.' +
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ' +
      'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat, sed diam voluptua. At vero eos et accusam et justo duo dolores' +
      ' et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est' +
      ' Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
      'sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo ' +
      'eirmod eos erat, et nonumy sed tempor et et invidunt justo labore ' +
      'Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed ' +
      'takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ' +
      'ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ' +
      'eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   \n' +
      '\n' +
      'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ' +
      'eos et accusam et justo duo dolores et ea rebum. Stet clita kasd ' +
      'gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ' +
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ' +
      'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat, sed diam voluptua. At vero eos et accusam et justo duo dolores' +
      ' et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est' +
      ' Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ' +
      'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore ' +
      'et dolore magna aliquyam erat, sed diam voluptua. At vero eos et ' +
      'accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,' +
      ' no sea takimata sanctus.   \n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam ' +
      'nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam ' +
      'erat, sed diam voluptua. At vero eos et accusam et justo duo dolores' +
      ' et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus ' +
      'est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,' +
      ' consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt' +
      ' ut labore et dolore magna aliquyam erat, sed diam voluptua. At ' +
      'vero eos et accusam et justo duo dolores et ea rebum. Stet clita' +
      ' kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor ' +
      'sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      ' sed diam nonumy eirmod tempor invidunt ut labore et dolore magna' +
      ' aliquyam erat, sed diam voluptua. At vero eos et accusam et justo ' +
      'duo dolores et ea rebum. Stet clita kasd gubergren, no sea';
    this.articleAuthor = 'Bester Autor';
    this.articleDate = '11.09.2018';
    this.articleAuthorPicture = './assets/CyberEgg.jpg';
  }
}
