import { Component, OnInit } from '@angular/core';

interface ContactInterface {
    Fullname: string;
    Username: string;
    Email: string;
    Phone: string;
    Gender: string;
    Password: string;
    Status: string;
    Address: string; 
    DateOfBirth: string;
    CreatedAt: Date;
    // UpdatedAt: Date;
}

@Component({
    selector: 'app-contact',
    templateUrl: './createcontact.component.html',
    styleUrls: ['./createcontact.component.css']
})
export class ContactComponent implements OnInit {
    public fullname: string = '';
    public username: string = '';
    public email: string = '';
    public phone: string = '';
    public gender: string = '';
    public password: string = '';
    public status: string = '';
    public address: string = '';
    public dob: string = 'Active';
    public contactArray: ContactInterface[] = [];
    public created_at: Date = new Date();
    // public updated_at: Date = new Date();

    ngOnInit() {
        const contactDetails = localStorage["contactDetails"];
        if (contactDetails) {
            this.contactArray = JSON.parse(contactDetails) as ContactInterface[];
            console.log(this.contactArray);
        } else {
            this.contactArray = [];
        }
    }

    addContact() {
        const contactObject = {
            Fullname: this.fullname,
            Username: this.username,
            Email: this.email,
            Phone: this.phone,
            Gender: this.gender,
            Password: this.password,
            Status: this.status,
            Address: this.address,
            DateOfBirth: this.dob,
            CreatedAt: this.created_at,
            // UpdatedAt: this.updated_at,
        };

        this.contactArray.push(contactObject);
        console.log(this.contactArray);
        localStorage.setItem("contactDetails", JSON.stringify(this.contactArray));
    }

    deleteUser(index: number) {
        this.contactArray.splice(index, 1);
        localStorage.setItem("contactDetails", JSON.stringify(this.contactArray));
    }
}
