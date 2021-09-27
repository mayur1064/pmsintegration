https://drive.google.com/drive/folders/15gCdnAchTkzPzCJpjowVGO5QE4B_tAmm?usp=sharing
Use the above database for the following routes

1) http://localhost:10027/api/groups/{Group_id}

E.g 1) http://localhost:10027/api/groups/5

[
    [
        {
            "Group_id": 5,
            "Group_Name": "Btech-Computer Engineering-PRJ-21-22-1",
            "startDate": "2021-07-13T18:30:00.000Z",
            "Guidename": "Vikas Kolekar"
        }
    ],
    [
        {
            "leadername": "Ezekiel Huber",
            "leadermobile": 2056724768,
            "leaderemail": "pyziwyta@mailinator.com"
        }
    ]
]

E.g 2) http://localhost:10027/api/groups/5

[
    [
        {
            "Group_id": 6,
            "Group_Name": "Btech-Computer Engineering-PRJ-21-22-2",
            "startDate": null,
            "Guidename": "Vikas Kolekar"
        }
    ],
    [
        {
            "leadername": "Macaulay Johnson",
            "leadermobile": 8551749828,
            "leaderemail": "julanudiby@mailinator.com"
        }
    ]
]


2. http://localhost:10027/api/person/{Person_Id}

Basically returns the all the projects assigned to the  guide
E.g 1 http://localhost:10027/api/person/7

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
        "startDate": "2021-07-13T18:30:00.000Z"
    },
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
        "startDate": null
    },
    {
        "Group_id": 11,
        "Group_Name": "TY-Computer Engineering-PRJ-21-22-1",
        "Group_title": "NOT STARTED YET",
        "Year": "TY",
        "Instructor_id2": 1,
        "Instructor_id1": 4,
        "Instructor_id_industry": 4,
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
        "Project_Type_id": 2,
        "industry_project_id": 29,
        "Objective": null,
        "Scope": null,
        "createDate": "2021-09-23T18:30:00.000Z",
        "startDate": null
    },
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
        "startDate": null
    }
]

