https://drive.google.com/drive/folders/15gCdnAchTkzPzCJpjowVGO5QE4B_tAmm?usp=sharing
Use the above database for the following routes


1) http://localhost:10027/api/home/{Emp_code}
Empcode -> grno_EmpCode in persons table
Returns the data of the projects under the guide

gid -> Group_id of the Group
gna -> Group_name 
gti -> Group_title
gst -> Status

Eg 1) http://localhost:10027/api/home/20698

[
    [
        {
            "gid": 5,
            "gna": "Btech-Computer Engineering-PRJ-21-22-1",
            "gti": "cccc",
            "gst": "On Time",
            "Complete": 0,
            "Waiting": 0
        }
    ],
    [
        {
            "gid": 6,
            "gna": "Btech-Computer Engineering-PRJ-21-22-2",
            "gti": "NOT STARTED YET",
            "gst": "On Time",
            "Complete": 0,
            "Waiting": 0
        }
    ],
    [
        {
            "gid": 11,
            "gna": "TY-Computer Engineering-PRJ-21-22-1",
            "gti": "NOT STARTED YET",
            "gst": "On Time",
            "Complete": 0,
            "Waiting": 0
        }
    ],
    [
        {
            "gid": 12,
            "gna": "TY-Computer Engineering-PRJ-21-22-2",
            "gti": "NOT STARTED YET",
            "gst": "On Time",
            "Complete": 0,
            "Waiting": 0
        }
    ]
]

