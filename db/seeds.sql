INSERT INTO department (id, name)
VALUES 
    (1, "Finance"),
    (2, "Sales"),
    (3, "Management"),
    (4, "Accounting"),
    (5, "Human Resources"),
    (6, "Customer Service"),
    (7, "Marketing");
   



INSERT INTO role (id, title, salary, department_id)
VALUES 
    (1, 'General Manager', 90000, 3),
    (2, 'Human Resource Manager', 80000, 5),
    (3, 'Head of Accounting', 80000, 4),
    (4, 'Chief Operating Officer', 120000, 3),
    (5, 'Business Analyst', 100000, 1),
    (6, 'Marketing Specialist', 50000, 7),
    (7, 'Chief Executive Officer', 200000, 3),
    (8, 'Project Manager', 50000, 3),
    (9, 'Sales Manager', 80000, 2),
    (10, 'Sales Representative', 70000, 2),
    (11, 'Vice President', 400000, 3),
    (12, 'President', 10000000, 3);





INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Emily', 'Johnson', 1, NULL ),
    ('Sarah', 'Rodriguez', 3, NULL ),
    ('Oliver', 'Williams', 4, NULL ),
    ('Zoe', 'Patel', 5, NULL ),
    ('Nathan', 'Kim', 6, NULL ),
    ('Aiden', 'Garcia', 7, NULL ),
    ('Amelia', 'Davis', 8, NULL ),
    ('Gabriella', 'Martinez', 9, NULL),
    ('Liam', 'Murphy', 10, NULL ),
    ('Isabella', 'Jenkins', 11, NULL ),
    ('Charlotte', 'Henderson', 12, NULL );

