
For User Register

post(`http://localhost:10027/api/auth/signup`, {
    Person_Id: Person_Id, // This is empty 
    username: username,
    FullName: FullName,
    email: email,
    grno_EmpCode: grno_EmpCode,
    Mobile: Mobile,
    password: password,
    roles: role_id,
    college: college_id,
    department: department_id,
});
}

Example object sent in post request

{ "username": "vikas123", 
"FullName": "Vikas Sakhare", 
"email": "vikas.sakahre@viit.ac.in",
"grno_EmpCode": "EMP2134", 
"Mobile": "9876543210",
"password": "asdfgh",
"roles": 3, 
"college": 1, 
"department": 1 }