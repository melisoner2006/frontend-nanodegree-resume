/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*

var languages = ["Java", "Perl", "Php", "SQL", "JavaScript", "Python", "C++", "HTML", "CSS" ];
var operatingsystems = ["Unix distributions (Linux, Solaris, AIX)", "Windows"];
var servers = ["Tomcat", "Oracle"];
var ides = ["Eclipse", "Netbeans", "Visual Studio"];
var versioncontrol = ["SVN", "git"];
var other = ["EBS", "Sharepoint", "Putty", "Greedy Regular Expressions"]; 
var tools = ["Terminal", "Command Prompt"];
var responsibilities = [
"Enhanced products with adding storage options like Dropbox, Google Drive, SharePoint, GIT and SVN and adding features like Watermark using Java, Bash, Google Drive API and Apache PDFBox",
"Created/Modified forms for the features I developed using PHP, JavaScript, jQuery, SQL",
"Modified the diagnostics product for customers using Perl and tested on different UNIX environments",
"Wrote scripts with Bash to automate building, packaging and deploying Java projects",
"Wrote end-user documentation for new products and modernized existing user manuals and install guides",
"Installed and tested 3rd party Oracle E-Business Suite applications on multi-tier architectures",
"Investigated diagnostics results and error codes in the submitted support cases and framed/solved the issues with reverse engineering"
];
*/
var personalskills = ["problem solving", "autonomy", "detail orientation"];
var bio = {
	"name": "Melis Oner",
	"role": "Software Developer",
	"contacts":{
		"mobile": "(989)430-6896",
		"email": "melisoner2006@gmail.com",
		"github": "melisoner2006",
		"twitter": "",
		"location": "Troy, MI"
	},
	"pictureUrl": "https://avatars2.githubusercontent.com/u/3477494?v=3&u=899c5c9d460dfa235f04fb54280e05b7b4f64ec9&s=140",
	"welcomeMessage": "Welcome! Enjoy my interactive resume",
	"skills": personalskills
	
};

if(bio.skills.length !== 0){
	console.log("Bio object has elements");
	$("#header").append(HTMLskillsStart);
	for(var i=0; i<bio.skills.length; i++){
		//HTMLskills = HTMLskills.replace("%data%",personalskills[i]);
		//console.log(i, HTMLskills);
		$("#skills").append(HTMLskills.replace("%data%",personalskills[i]));
	}
//	$("#skills").append(HTMLskills.replace("%data%", bio.skills)); //This ones combines elements with comma
}

var work = {
	"jobs": [
	{
		"employer" :"Unitask",
		"title":"Software Developer",
		"location":"Bloomfield Hills, MI, USA",
		"dates": "January 2015 - June 2015",
		"description": "Adding new functionality to existing products; modifying legacy code; testing and documentation"
	},
	{
		"employer" :"Central Michigan University Health Professions Department",
		"title":"Student Programmer",
		"location":"Mt. Pleasant, MI, USA",
		"dates": "May 2014 - December 2014",
		"description": "Re designing and developing an old web application with Python and Django"
	},
	{
		"employer" :"Central Michigan University Computer Science Department",
		"title":"Graduate Assistant",
		"location":"Mt. Pleasant, MI, USA",
		"dates": "August 2012 - December 2015",
		"description": "Teaching CS and non-CS students, assisting labs, tutoring undergrad CS students, and grading assignments"
	},
	{
		"employer" :"aMVG - a Mobile Ventures Group",
		"title":"Android Developer",
		"location":"Istanbul, Turkey",
		"dates": "February 2012 - August 2012",
		"description": "Developing Android applications"
	}	
	]
};

if (work.jobs.length > 0){
	console.log("Work.jobs is not empty");
	for (job in work.jobs){
		console.log("LOG:", i, work.jobs[job].employer);
		$("#workExperience").append(HTMLworkStart);
		//HTMLworkEmployer, HTMLworkTitle
		$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
		$("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
	}
}


var education = {
	"schools": [
	{
		"name":"Central Michigan University",
		"degree": "MSc.",
		"major": "Computer Science",
		"years": "2012-2014",
		"location": "Mt. Pleasant, MI, USA"
	}, 
	{
		"name":"Istanbul Technical University",
		"degree": "BSc.",
		"major": "Electrical Engineering",
		"years": "2006 - 2011",
		"location": "Istanbul, TURKEY"		
	}, 
	{
		"name":"Istanbul University Conservatory",
		"degree": "Part-time student",
		"major": "Classical Guitar",
		"years": "2000-2011",
		"location": "Istanbul, Turkey"		
	}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "May 2015",
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "June 2015",
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "July 2015",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "Machine Learning",
			"school": "Coursera",
			"dates": "August 2013",
			"url": "https://www.coursera.org/learn/machine-learning/home/info"
		}
	]
};

var projects = {
	"projects": [
	{
		"title":"ABET Digital Repository Design and Implementation for CMU Computer Science Department",
		"dates": "May 2014",
		"description": "I have developed this digital repository as my thesis for CMU's CS department",
		"images": "",
		"url": "https://github.com/melisoner2006/Digital-File-Repository"
	},
	{
		"title":"Eye activity classification with one-channel EEG data stream",
		"dates": "May 2012",
		"description": "Using one channel Electroencephelograph device and machine learning techniques, I classified eye activities.",
		"images": "",
		"url": "https://www.researchgate.net/publication/257811495_Analyzing_One-Channel_EEG_Signals_for_Detection_of_Close_and_Open_Eyes_Activities?ev=prf_pub"
	},	
	{
		"title":"Chrome Extension for HTTP Cookie Management",
		"dates": "May 2014",
		"description": "For CMU Graduate Seminar, I made a simple HTTP cookie management application",
		"url": "https://github.com/melisoner2006/MelisLovesCookies",
		"images": ""
	},
	{
		"title":"Fall Detection and Activity Classification ",
		"dates": "September 2011 - February 2012",
		"description": "",
		"images": "",
		"url": "https://www.researchgate.net/publication/235387306_Towards_the_run_and_walk_activity_classification_through_step_detection_-_An_android_application?ev=prf_pub"
	}
	]
};




