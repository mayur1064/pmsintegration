GET REQUESTS

1. http://localhost:10027/api/guide

[
    {
        "name": "admin Guide",
        "Person_id": 1,
        "Instructor_id": 1
    },
    {
        "name": "Subhash Tatale",
        "Person_id": 2,
        "Instructor_id": 2
    },
    {
        "name": "Vikas Kolekar",
        "Person_id": 7,
        "Instructor_id": 4
    },
    ....
]

--------------------------------------------------------------------------------------------------------

2. http://localhost:10027/api/companies

[
    {
        "Company_id": 1,
        "Company_name": "Infosys"
    },
    {
        "Company_id": 2,
        "Company_name": "Tech Mahindra"
    },
    {
        "Company_id": 3,
        "Company_name": "Wipro"
    },
    {
        "Company_id": 4,
        "Company_name": "TCS"
    },
    {
        "Company_id": 5,
        "Company_name": "LTI"
    },
    {
        "Company_id": 6,
        "Company_name": "Cognizant"
    },
    ...
]


3. http://localhost:10027/api/getindusid

[
    {
        "industry_project_id": 33
    }
]


4. http://localhost:10027/api/department/{collegeid}

E.g 1 http://localhost:10027/api/department/1

[
    {
        "Department_id": 1,
        "Department_Name": "Computer Engineering",
        "College_id": 1
    },
    {
        "Department_id": 3,
        "Department_Name": "Mechanical Engineering",
        "College_id": 1
    },
    {
        "Department_id": 4,
        "Department_Name": "Electronics and Telecommunications",
        "College_id": 1
    },
    {
        "Department_id": 5,
        "Department_Name": "Information Technology",
        "College_id": 1
    },
    ...
]

E.g 2 http://localhost:10027/api/department/2

[
    {
        "Department_id": 2,
        "Department_Name": "Electronics Engineering",
        "College_id": 2
    },
    {
        "Department_id": 7,
        "Department_Name": "Computer Science",
        "College_id": 2
    },
    {
        "Department_id": 8,
        "Department_Name": "Civil ",
        "College_id": 2
    },
    ...
]

E.g 3 http://localhost:10027/api/department/3

[
    {
        "Department_id": 11,
        "Department_Name": "Electronics Engineering",
        "College_id": 3
    },
    {
        "Department_id": 12,
        "Department_Name": "Computer Science",
        "College_id": 3
    },
    {
        "Department_id": 13,
        "Department_Name": "Civil ",
        "College_id": 3
    },
    ...
]


5. http://localhost:10027/api/types/{collegeid}

http://localhost:10027/api/types/1

[
    {
        "id": 1,
        "actualtype": "Research"
    },
    {
        "id": 2,
        "actualtype": "Industrial"
    }
]

6. http://localhost:10027/api/types/2

[
    {
        "id": 3,
        "actualtype": "Industrial"
    },
    {
        "id": 4,
        "actualtype": "Research"
    }
]

7. http://localhost:10027/api/getDomains/{collegeid}/{departmentid}

http://localhost:10027/api/getDomains/1/1

[
    {
        "id": 9,
        "name": "Web Developement"
    },
    {
        "id": 10,
        "name": "Application Developement"
    },
    {
        "id": 11,
        "name": "Artificial Intelligence"
    },
    {
        "id": 12,
        "name": "Machine Learning"
    },
    ...
]

http://localhost:10027/api/getDomains/1/3

[
    {
        "id": 13,
        "name": "Design"
    },
    {
        "id": 14,
        "name": "Modeling"
    },
    {
        "id": 15,
        "name": "Drafting"
    },
    {
        "id": 16,
        "name": "Manufacturing"
    },
    ...
]

http://localhost:10027/api/getDomains/1/4

[
    {
        "id": 24,
        "name": "Embedded Systems"
    },
    {
        "id": 26,
        "name": "VLSI"
    },
    {
        "id": 27,
        "name": "Signal Processing"
    },
]

