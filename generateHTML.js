function getSubElementById(element, id) {
    var elms = element.getElementsByTagName("*");

    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === id) {
            return elms[i];
        }
    }
}

function generateListElement(template, title, url, info, icon) {
    // make it so that if there is no description it does not show the icon and the plus
    
    var element = document.createElement("div");
    element.innerHTML = template;

    getSubElementById(element, "link").href = url;
    getSubElementById(element, "link").innerHTML += title;
    getSubElementById(element, "icon").setAttribute("uk-icon", icon);
    getSubElementById(element, "info").innerHTML += info;

    return element;
}

function getHTML(localURL, callback) {
    const url = chrome.runtime.getURL(localURL);

    fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            callback(data);
        });
}


function generateHokieSpa(callback) {

    getHTML("NewListElement.html", (template) => {

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Change Of Major Application",
                "/ssb/prod/hzskmajr.P_DispMajorChange",
                "For continuing undergraduate students only, including any student who has at least one credit of VT coursework on the VT transcript.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Information for New Students",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_NewStuMnu",
                "New Freshmen, Transfer, and International students should complete these essential steps toward enrollment by June 1st.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Financial Checklist for New and Returning Students",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_FinancialChecklistMnu",
                "Complete the following tasks to enable an easy fiscal transition for you and family members.",
                "icon: list")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Guest Account Access",
                "/ssb/prod/hzskgsta.P_GuestUpd",
                "Manage guest access to your academic record (grades) information, financial aid information, Hokie Passport, student account summary, and the 1098T.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Course Request",
                "/ssb/prod/hzskvtrq.P_AddDropCrse",
                "",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Course Request Results",
                "/ssb/prod/hzskcreq.P_CrseReqRes",
                "View your course request results.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Registration (Add/Drop) and Schedule",
                "https://apps.es.vt.edu/StudentRegistrationSsb/ssb/registration",
                "Look Up Classes; Add or drop classes; Display your class schedule.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Grades Menu",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuGradeMnu",
                "View Midterm/Final Grades, Class Rank, Transfer and Other Additional Credit information, GPA Calculators.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Degree Menu",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuDegreeMnu",
                `Undergraduate Students: Apply for your Degree, Request and view your Degree Audit Report (DARS), Add/Change your Diploma Address. <br>
                Graduate Students: Apply for your degree, view Plan of Study, view Checklist and let us know if you plan to attend commencement.`,
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Degree Audit Reporting System (DARS) and Pathways Planner",
                "https://apps.es.vt.edu/selfservice/audit/list.html",
                "First Step to Academic Degree Success Begins Here",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "CeDiploma (Certified Electronic Diploma)",
                "https://apps.es.vt.edu/CeDiploma/",
                "To learn more or order a CeDiploma",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Transcripts and Certifications Menu",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_TranscriptMnu",
                "View and Request Transcripts, Request Certifications of Enrollment.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "FERPA (Family Educational Rights and Privacy Act Disclosure)",
                "/ssb/prod/hzskferp.P_DispFerpa",
                "The Family Educational Rights and Privacy Act (FERPA) requires that you authorize the university prior to release of any academic record or account information to a third party. Completion of the following online form allows you to approve disclosure to parents, guardians, Spouse, Sponsor, etc.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "V.A. Enrollment Certification Form",
                "/ssb/prod/hzskvets.P_DispTermSelectionPage",
                "G.I. Bill students: complete the Certification Form each semester that you want to use your VA Educational Benefits.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "View your General Student Information",
                "/ssb/prod/bwskgstu.P_StuInfo",
                "View your Advisor, Major, College, Academic Standing, Foreign Language requirement, etc.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Student Conduct Notifications",
                "/ssb/prod/hzskoscs.P_StuCaseNotice",
                "View your notifications from the Office of Student Conduct.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Honor Code Violation Notifications",
                "/ssb/prod/hzskhcvs.P_StuCaseNotice",
                "View your notifications from the Office of the Undergraduate Honor System.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Hokie Wallet",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_AdminMnu",
                "•View and Pay e-Bill, and add an Authorized Payer •Budget Tuition Plan •Family Educational Rights and Privacy Act Disclosure •Hokie Passport Services •Direct Deposit •1098-T Tax Information •HOLD Information •Tuition and Fees",
                "icon: credit-card")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Financial Aid Information",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_FAApplStuMnu",
                "Review the status of your award information here, including Financial Aid Holds, Requirements to Receive Aid, Cost of Attendance, Award History, Loan Requirements, Academic Progress, and Loan Application History.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Housing and Dining Services",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_ResMenu",
                "Add/Change Individual Dining Plan, View Housing Assignment",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Hokie Passport Services",
                "https://www.hokiepassport.vt.edu/deposit.php",
                "Make Hokie Passport Account and Dining Dollars/Flex Additions Deposits.",
                "icon: credit-card")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Personal Information",
                "",
                `View and Update your address(es), phone number(s), view e-mail address(es). View and update emergency contact information.<br>
                View name change information & social security number change information. Change your password.`,
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "University Catalog Page",
                "http://www.vt.edu/academics",
                "View Course Catalog.",
                "icon: link")
        );
        document.getElementById("list").appendChild(
            generateListElement(template,
                "Student Organizations Menu",
                "/ssb/prod/twbkwbis.P_GenMenu?name=bmenu.P_StuOrgMnu",
                "Fraternity and Sorority Life, Student Organization Registration and Student Organization Room Reservation.",
                "icon: social")
        );
        callback();
    });
}


function generateHokiePLUS(callback) {

    getHTML("NewListElement.html", (template) => {

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Manage Accounts",
                "https://accounts.it.vt.edu/",
                "Change password, forward email.",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Confidentiality Options",
                "https://accounts.it.vt.edu/myprofile/profile",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "View Address(es) and Phones(s)",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkogad.P_SelectAtypView",
                "International students in F-1 or J-1 status must report their current physical address in the U.S. within 10 days of moving to the address.",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Update Address(es) and Phones(s)",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkogad.P_SelectAtypUpdate",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "View Email Address(es)",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkogad.P_SelectEmalView",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "View Emergency Contacts",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkoemr.P_ViewEmrgContacts",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Update Emergency Conatacts",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkoemr.P_SelectEmrgContacts",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Name Change Information",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkoinf.P_DispUpdName",
                "",
                "icon: link")
        );

        document.getElementById("list").appendChild(
            generateListElement(template,
                "Social Security Number Change Information",
                "https://banweb.banner.vt.edu/ssb/prod/bwgkoinf.P_DispUpdSSN",
                "",
                "icon: link")
        );

        callback();
    });
}
