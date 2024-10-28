//data taken from chatgpt

const employees = [
    {
      
          "id": 1,
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Complete the project report",
              "date": "2024-10-25",
              "category": "Work",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Review team progress",
              "date": "2024-10-26",
              "category": "Management",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Prepare slides for meeting",
              "date": "2024-10-27",
              "category": "Work",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true
            }
          ]
        },
        {
          "id": 2,
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Complete software testing",
              "date": "2024-10-28",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Fix bugs reported by QA",
              "date": "2024-10-29",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Code review with peers",
              "date": "2024-10-30",
              "category": "Development",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 3,
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Prepare budget for Q4",
              "date": "2024-11-01",
              "category": "Finance",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Update financial projections",
              "date": "2024-11-03",
              "category": "Finance",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 4,
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Client meeting for new project",
              "date": "2024-11-05",
              "category": "Client",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Prepare project proposal",
              "date": "2024-11-06",
              "category": "Work",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Review contract details",
              "date": "2024-11-07",
              "category": "Legal",
              "active": true,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            {
              "title": "Task 4",
              "description": "Draft contract for vendor",
              "date": "2024-11-08",
              "category": "Legal",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
            }
          ]
        },
        {
          "id": 5,
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
            {
              "title": "Task 1",
              "description": "Organize team-building event",
              "date": "2024-11-10",
              "category": "HR",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 2",
              "description": "Conduct performance reviews",
              "date": "2024-11-11",
              "category": "HR",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            {
              "title": "Task 3",
              "description": "Prepare HR report for management",
              "date": "2024-11-12",
              "category": "HR",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true
            }
          ]
        }
     
  ]
  
  const admin = [
    {
      
        "id": 1,
        "email": "admin@gmail.com",
        "password": "123"
      
    }
  ]
  

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    // console.log(employees)
    const admin= JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
}