let userName = 'username';
const password = 'password';
const data = {
    webName: 'Complete Web Developent Course With Jhankar Mahbub',
    webAuthor: 'Jhankar Mahbub',
}
const {webName: webCourseName,  webAuthor: webCourseAuthor} = data;
let templateString = `Username: ${userName} | Password: ${password}
Web course: ${webCourseName} | Web course author: ${webCourseAuthor}`;
console.log(templateString);