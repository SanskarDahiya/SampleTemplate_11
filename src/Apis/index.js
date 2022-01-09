import axios from "axios";

const base_url = "https://jobs-api.squareboat.info/api/v1";

const invoke = async (url, params) => {
  let result = { status: false };
  try {
    let body = params.body;
    if (params.hasOwnProperty("body") && typeof body === "string") {
      body = JSON.stringify(body);
    }
    result = await axios({ url: base_url + url, ...params, body });
  } catch (err) {
    result = { error: true, code: err.code, message: err.message, stack: err.stack };
    if (err.response && err.response.data && err.response.data.errors) {
      result.errors = err.response.data.errors;
    }
  }
  return result;
};

export const VerifyLogin = async ({ email, password }) => {
  let result;
  if (email && password) {
    result = await invoke("/auth/login", {
      "method": "POST",
      "body": { "language": "json", email, password }
    });
  } else {
    throw new Error("Invalid Params");
  }
  return result;
};

const rawPostManData = {
  "info": {
    "_postman_id": "2426e4cf-1d65-47fa-b601-79cd5545ae23",
    "name": "JobsServer",
    "description": "This is the postman collection for the Jobs Server API.",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "auth",
      "item": [
        {
          "name": "Login",
          "_postman_id": "867331d5-ce85-4e14-a994-10ee36aaad15",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": '{\n\t"email": "sharad@gmail.com",\n\t"password": "sharad"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": "{{base_url}}/auth/login"
          },
          "response": []
        },
        {
          "name": "Register",
          "_postman_id": "1f46fd33-d64d-492e-962a-f3cb0f7597b9",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw":
                '{\n\t"email": "sharadR@gmail.com",\n\t"userRole": 0, \n\t"password": "sharadR",\n\t"confirmPassword": "sharadR",\n\t"name": "sharadR",\n\t"skills": "HTML, CSS, JS"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": "{{base_url}}/auth/register"
          },
          "response": []
        },
        {
          "name": "Get Reset Password Token",
          "_postman_id": "4881eabe-9bcf-489e-a35f-91b42796ef1a",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{base_url}}/auth/resetpassword?email=sharad@gmail.com",
              "host": ["{{base_url}}"],
              "path": ["auth", "resetpassword"],
              "query": [{ "key": "email", "value": "sharad@gmail.com" }]
            }
          },
          "response": []
        },
        {
          "name": "VerifyPasswordToken",
          "_postman_id": "5309fb77-a78e-4f9f-8352-3da7c2db38b0",
          "request": {
            "method": "GET",
            "header": [],
            "url":
              "{{base_url}}/auth/resetpassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlzQGdtYWlsLmNvbSIsImlhdCI6MTU5MTEyOTg1NSwiZXhwIjoxNTkxMTMzNDU1fQ.qWTTb-HDhFKsjZbYaKZlLeosKbJQBRERX-pQumFIak4"
          },
          "response": []
        },
        {
          "name": "Change Password",
          "_postman_id": "c845cdea-26b5-4381-8a0d-587190b38564",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw":
                '{\n\t"password": "abhisheka",\n\t"confirmPassword": "abhisheka",\n\t"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlAZ21haWwuY29tIiwiaWF0IjoxNTkxMjU0Mzg3LCJleHAiOjE1OTEyNTc5ODd9.4QWX3ZmRjk8YEFDkrr2QBrSMgvbxojEy8LsGiintdvQ"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": "{{base_url}}/auth/resetpassword"
          },
          "response": []
        }
      ],
      "_postman_id": "6308a114-c699-4b62-8f84-d3b1c642704e",
      "protocolProfileBehavior": {}
    },
    {
      "name": "jobs",
      "item": [
        {
          "name": "Create Job",
          "_postman_id": "0987980e-4ed7-4d51-8d65-b81d4e60c6af",
          "request": {
            "auth": { "type": "bearer", "bearer": {} },
            "method": "POST",
            "header": [{ "key": "Authorization", "value": "{{recruiter_token}}", "type": "text" }],
            "body": {
              "mode": "raw",
              "raw": '{\n\t"title": "job title",\n\t"description": "job description",\n\t"location": "delhi"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": "{{base_url}}/jobs/",
            "description": "add new job"
          },
          "response": []
        },
        {
          "name": "Get One Job Details",
          "_postman_id": "986ca238-4a0a-4049-b7de-c541ac8aa7fd",
          "request": {
            "method": "GET",
            "header": [{ "key": "", "value": "", "type": "text", "disabled": true }],
            "url": "{{base_url}}/jobs/f1acc403-eaef-42e2-b413-700ba25a9b38",
            "description": "Find one job"
          },
          "response": []
        },
        {
          "name": "Get All Jobs",
          "_postman_id": "8aac3784-ee1d-486a-9afc-9f7160eed5c1",
          "request": {
            "method": "GET",
            "header": [{ "key": "", "value": "", "type": "text", "disabled": true }],
            "url": {
              "raw": "{{base_url}}/jobs",
              "host": ["{{base_url}}"],
              "path": ["jobs"],
              "query": [{ "key": "page", "value": "1", "disabled": true }]
            }
          },
          "response": []
        },
        {
          "name": "Delete job",
          "_postman_id": "76cda6eb-18e1-463c-82ff-537c259fcc78",
          "request": {
            "method": "DELETE",
            "header": [{ "key": "Authorization", "type": "text", "value": "{{recruiter_token}}" }],
            "body": {
              "mode": "raw",
              "raw": '{\n\t"jobId": "5452304b-82f8-4095-822b-f41136a0955d"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": {
              "raw": "{{base_url}}/jobs",
              "host": ["{{base_url}}"],
              "path": ["jobs"],
              "query": [{ "key": "", "value": "", "disabled": true }]
            }
          },
          "response": []
        }
      ],
      "_postman_id": "f065069b-12fe-40a6-bcf7-c5b0ebedc02a",
      "protocolProfileBehavior": {}
    },
    {
      "name": "candidates",
      "item": [
        {
          "name": "Apply to job",
          "_postman_id": "ba3e1a3d-d2ee-4f20-be4a-7ece9edb984c",
          "request": {
            "method": "POST",
            "header": [{ "key": "Authorization", "value": "{{candidate_token}}", "type": "text" }],
            "body": {
              "mode": "raw",
              "raw": '{\n\t"jobId": "5452304b-82f8-4095-822b-f41136a0955d"\n}',
              "options": { "raw": { "language": "json" } }
            },
            "url": "{{base_url}}/candidates/jobs"
          },
          "response": []
        },
        {
          "name": "Get available jobs",
          "_postman_id": "3b3fdcaf-d608-49db-852b-a3dd43740676",
          "request": {
            "method": "GET",
            "header": [{ "key": "Authorization", "value": "{{candidate_token}}", "type": "text" }],
            "url": {
              "raw": "{{base_url}}/candidates/jobs",
              "host": ["{{base_url}}"],
              "path": ["candidates", "jobs"],
              "query": [{ "key": "page", "value": "2", "disabled": true }]
            }
          },
          "response": []
        },
        {
          "name": "Already applied jobs",
          "_postman_id": "70cb02ec-d2a5-44cc-88a4-9c97e53b0735",
          "request": {
            "method": "GET",
            "header": [{ "key": "Authorization", "value": "{{candidate_token}}", "type": "text" }],
            "url": "{{base_url}}/candidates/jobs/applied"
          },
          "response": []
        }
      ],
      "_postman_id": "764e6bf1-5e43-4443-8321-288683ba55c0",
      "protocolProfileBehavior": {}
    },
    {
      "name": "recruiters",
      "item": [
        {
          "name": "Get posted jobs",
          "_postman_id": "5ba39ca9-aa7d-4796-a082-4935af43511b",
          "request": {
            "method": "GET",
            "header": [{ "key": "Authorization", "value": "{{recruiter_token}}", "type": "text" }],
            "url": "{{base_url}}/recruiters/jobs"
          },
          "response": []
        },
        {
          "name": "Get one job candidates",
          "_postman_id": "83158e9e-f492-4a8f-8a81-ba5172159628",
          "request": {
            "method": "GET",
            "header": [{ "key": "Authorization", "value": "{{recruiter_token}}", "type": "text" }],
            "url": "{{base_url}}/recruiters/jobs/5452304b-82f8-4095-822b-f41136a0955d/candidates"
          },
          "response": []
        }
      ],
      "_postman_id": "88bf5576-d980-4218-a799-955a012b8790",
      "protocolProfileBehavior": {}
    }
  ],
  "auth": { "type": "bearer", "bearer": {} },
  "protocolProfileBehavior": {}
};
