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
  
  Example of the object  sent in the post request in body
  {
  College_id: 1,
  Companyid: "1",  
  Department_id: 1,  
  Domain_Pref_1: 9,  
  Domain_Pref_2: 10,  
  Domain_Pref_3: 11,  
  Instructor_id_industry: "2",  
  Project_Type_id: 1,  
  Status_id: 2,  
  final_domain: 9,  
  finalindusid: 29,  
  instructerid1: 4,  
  instructerid2: 1,  
  projectname: "",  
  userarray: ["21810167"],  //Array of all grnos of the group members
  year: "Btech",  



-----------------------------------------------------------------------------------------

post(`http://localhost:10027/api/postC&C/${companyId}/${collegeId}`);






---------------------------------------------------------------------------------


