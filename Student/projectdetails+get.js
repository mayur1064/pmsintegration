1) http://localhost:10027/api/pds/{Group_id}

Eg 1) http://localhost:10027/api/pds/6

[
    {
        "Group_id": 6,
        "Group_Name": "Btech-Computer Engineering-PRJ-21-22-2",
        "Group_title": "NOT STARTED YET",
        "Year": "Btech",
        "Instructor_id2": 1,
        "Instructor_id1": 4,
        "Instructor_id_industry": 2,
        "initial_Time": 0,
        "Design_Time": 0,
        "Devlopment_Time": 0,
        "Testing_Time": 0,
        "Deployment_Time": 0,
        "Department_id": 1,
        "College_id": 1,
        "final_domain": 11,
        "Domain_Pref_1": 9,
        "Domain_Pref_2": 10,
        "Domain_Pref_3": 11,
        "Status_id": 2,
        "Project_Type_id": 1,
        "industry_project_id": 22,
        "Objective": null,
        "Scope": null,
        "createDate": "2021-07-13T18:30:00.000Z",
        "startDate": null,
        "type": "Research",
        "company": "GSE Red",
        "FullName": "Vikas Kolekar",
        "Mobile": 8055822246,
        "email": "vikas.kolekar@viit.ac.in",
        "guide2": "admin Guide",
        "guide2Mobile": 9876543210,
        "guide2email": "adminGuide@viit.ac.in",
        "clg": "VIIT",
        "Department_Name": "Computer Engineering",
        "dom1": "Web Developement",
        "dom2": "Application Developement",
        "dom3": "Artificial Intelligence",
        "dom4": "Artificial Intelligence"
    }
]

Note - dom4 is the final_domain.
       dom1, dom2, dom3 are all same for all the entries as of now

Eg 2) http://localhost:10027/api/pds/5

[
    {
        "Group_id": 5,
        "Group_Name": "Btech-Computer Engineering-PRJ-21-22-1",
        "Group_title": "cccc",
        "Year": "Btech",
        "Instructor_id2": 1,
        "Instructor_id1": 4,
        "Instructor_id_industry": 2,
        "initial_Time": 2,
        "Design_Time": 2,
        "Devlopment_Time": 2,
        "Testing_Time": 2,
        "Deployment_Time": 2,
        "Department_id": 1,
        "College_id": 1,
        "final_domain": 9,
        "Domain_Pref_1": 9,
        "Domain_Pref_2": 10,
        "Domain_Pref_3": 11,
        "Status_id": 2,
        "Project_Type_id": 1,
        "industry_project_id": 22,
        "Objective": "ccccccGerman project",
        "Scope": "German project",
        "createDate": "2021-07-13T18:30:00.000Z",
        "startDate": "2021-07-13T18:30:00.000Z",
        "type": "Research",
        "company": "GSE Red",
        "FullName": "Vikas Kolekar",
        "Mobile": 8055822246,
        "email": "vikas.kolekar@viit.ac.in",
        "guide2": "admin Guide",
        "guide2Mobile": 9876543210,
        "guide2email": "adminGuide@viit.ac.in",
        "clg": "VIIT",
        "Department_Name": "Computer Engineering",
        "dom1": "Web Developement",
        "dom2": "Application Developement",
        "dom3": "Artificial Intelligence",
        "dom4": "Web Developement"
    }
]

Eg 3)  http://localhost:10027/api/pds/12

[
    {
        "Group_id": 12,
        "Group_Name": "TY-Computer Engineering-PRJ-21-22-2",
        "Group_title": "NOT STARTED YET",
        "Year": "TY",
        "Instructor_id2": 1,
        "Instructor_id1": 4,
        "Instructor_id_industry": 2,
        "initial_Time": 0,
        "Design_Time": 0,
        "Devlopment_Time": 0,
        "Testing_Time": 0,
        "Deployment_Time": 0,
        "Department_id": 1,
        "College_id": 1,
        "final_domain": 9,
        "Domain_Pref_1": 9,
        "Domain_Pref_2": 10,
        "Domain_Pref_3": 11,
        "Status_id": 2,
        "Project_Type_id": 1,
        "industry_project_id": 30,
        "Objective": null,
        "Scope": null,
        "createDate": "2021-09-23T18:30:00.000Z",
        "startDate": null,
        "type": "Research",
        "company": "Infosys",
        "FullName": "Vikas Kolekar",
        "Mobile": 8055822246,
        "email": "vikas.kolekar@viit.ac.in",
        "guide2": "admin Guide",
        "guide2Mobile": 9876543210,
        "guide2email": "adminGuide@viit.ac.in",
        "clg": "VIIT",
        "Department_Name": "Computer Engineering",
        "dom1": "Web Developement",
        "dom2": "Application Developement",
        "dom3": "Artificial Intelligence",
        "dom4": "Web Developement"
    }
]


2) http://localhost:10027/api/std/{Group_id}

Eg 1) http://localhost:10027/api/std/5

Returns data of all the members in the group

[
    [
        {
            "Person_id": 12,
            "grno_EmpCode": "17u0053",
            "username": "gamoxet",
            "FullName": "Ezekiel Huber",
            "email": "pyziwyta@mailinator.com",
            "Mobile": 2056724768,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:18:21.000Z",
            "updatedAt": "2021-07-14T04:18:21.000Z",
            "Password": "$2a$08$vqWlhyqyFQjzR4.WocGvFu1P1T5QGD6dCsv.06r0GaJrPN/G0NIRG"
        }
    ],
    [
        {
            "Person_id": 13,
            "grno_EmpCode": "17u0093",
            "username": "hykehoneq",
            "FullName": "Rhona Burns",
            "email": "rolowyc@mailinator.com",
            "Mobile": 9614227885,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:19:43.000Z",
            "updatedAt": "2021-07-14T04:19:43.000Z",
            "Password": "$2a$08$.IPqAsO6cgK5WoIaLeo33OfnxomMFgnIohhnIhkHxqvU44nRvD1xa"
        }
    ]
]

E.g 2) http://localhost:10027/api/std/6

[
    [
        {
            "Person_id": 15,
            "grno_EmpCode": "17u0039",
            "username": "danisi",
            "FullName": "Macaulay Johnson",
            "email": "julanudiby@mailinator.com",
            "Mobile": 8551749828,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:25:26.000Z",
            "updatedAt": "2021-07-14T04:25:26.000Z",
            "Password": "$2a$08$koXIARH8XL4wGMEIivi49OZo6sXSs70VNyUOTFmCq2Z5CKk32Rnvi"
        }
    ],
    [
        {
            "Person_id": 16,
            "grno_EmpCode": "17u0025",
            "username": "wohare",
            "FullName": "Owen Jacobs",
            "email": "wygo@mailinator.com",
            "Mobile": 7969902052,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:25:57.000Z",
            "updatedAt": "2021-07-14T04:25:57.000Z",
            "Password": "$2a$08$Jo3NHS9NWRiycpYsTabmMO9nzo4ZaYDDj90CVxv5A27abKKmaI0gi"
        }
    ],
    [
        {
            "Person_id": 17,
            "grno_EmpCode": "17u0059",
            "username": "ziqesa",
            "FullName": "Kimberly Walton",
            "email": "buhirofihe@mailinator.com",
            "Mobile": 1658075254,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:26:14.000Z",
            "updatedAt": "2021-07-14T04:26:14.000Z",
            "Password": "$2a$08$3f5yPDVEszcZ40e2K5nBi.BR0/EMapDWUnEjxt7L8DfQZzcJQYg2C"
        }
    ],
    [
        {
            "Person_id": 18,
            "grno_EmpCode": "17u0079",
            "username": "nodexor",
            "FullName": "Cherokee Hamilton",
            "email": "kamyx@mailinator.com",
            "Mobile": 1245742185,
            "department": 1,
            "college": 1,
            "roleId": 1,
            "usertype_id": 1,
            "createdAt": "2021-07-14T04:26:31.000Z",
            "updatedAt": "2021-07-14T04:26:31.000Z",
            "Password": "$2a$08$nuBqG80OUCX.LCUlqMC5SumllEQQt9oqYb7ZkxLMOS8g7SAb1kwse"
        }
    ]
]


3) http://localhost:10027/api/week/{Group_id}

[
    {
        "name": 1,
        "value": 0
    },
    {
        "name": 2,
        "value": 0
    },
    {
        "name": 3,
        "value": 0
    },
    {
        "name": 4,
        "value": 0
    },
    {
        "name": 5,
        "value": 0
    },
    {
        "name": 6,
        "value": 0
    },
    {
        "name": 7,
        "value": 0
    },
    {
        "name": 8,
        "value": 0
    },
    {
        "name": 9,
        "value": 0
    },
    {
        "name": 10,
        "value": 0
    }
]

E.g 2) http://localhost:10027/api/week/9

[
    {
        "name": 1,
        "value": 0
    },
    {
        "name": 2,
        "value": 0
    },
    {
        "name": 3,
        "value": 0
    },
    {
        "name": 4,
        "value": 0
    },
    {
        "name": 5,
        "value": 0
    },
    {
        "name": 6,
        "value": 0
    },
    {
        "name": 7,
        "value": 0
    },
    {
        "name": 8,
        "value": 0
    },
    {
        "name": 9,
        "value": 0
    }
]