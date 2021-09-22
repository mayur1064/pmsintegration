To Add Group
post(`http://localhost:10027/api/submitgrp`, {
    projectname: groupname,
    year: Year,
    instructerid2: 1,
    instructerid1: guide_id,
    Instructor_id_industry: industryGuide_id,
    Department_id: departmentId,
    College_id: collegeId,
    final_domain: domain,
    Domain_Pref_1: 9,
    Domain_Pref_2: 10,
    Domain_Pref_3: 11,
    Status_id: 2,
    Project_Type_id: projectid,
    Companyid: companyId,
    finalindusid: finalindusid,
    userarray: userarray, //Array of group members
  })


post(`http://localhost:10027/api/postC&C/${companyId}/${collegeId}`);

To Add Faculty
post(`http://localhost:10027/api/auth/signup`, {
    Person_Id: user.Person_Id,
    username: user.username,
    FullName: user.FullName,
    email: user.email,
    grno_EmpCode: user.grno_EmpCode,
    Mobile: user.Mobile,
    password: user.password,
    roles: user.roles,
    college: user.college,
    department: user.department,
  });
}

