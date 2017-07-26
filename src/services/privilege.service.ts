import { Injectable } from '@angular/core';

import { PrivilegeRequest } from '../models/privilege-request.model';

@Injectable()
export class PrivilegeService{
    private privileges: { title:string, categories:{title:string,description:string, img:string}[]}[] = 
    [
        {
            title: 'Medics',
            categories: [
                {
                    title: 'Hospitals',
                    description: 'Medical Hospitals description',
                    img: 'http://cloudfront.bernews.com/wp-content/uploads/2011/04/Rendering-of-KEMH-Main-Entrance-at-Night.jpg'
                },
                {
                    title: 'Clincs',
                    description: 'this is a description for the clincs description',
                    img: 'http://www.ahmedabadbraces.com/photos/clinicpic6.jpg'
                }
            ]
        },
        {
            title: 'Medics',
            categories: [
                {
                    title: 'Hospitals',
                    description: 'Medical Hospitals description',
                    img: 'http://cloudfront.bernews.com/wp-content/uploads/2011/04/Rendering-of-KEMH-Main-Entrance-at-Night.jpg'
                },
                {
                    title: 'Clincs',
                    description: 'this is a description for the clincs description',
                    img: 'http://www.ahmedabadbraces.com/photos/clinicpic6.jpg'
                }
            ]
        },
        {
            title: 'Medics',
            categories: [
                {
                    title: 'Hospitals',
                    description: 'Medical Hospitals description',
                    img: 'http://cloudfront.bernews.com/wp-content/uploads/2011/04/Rendering-of-KEMH-Main-Entrance-at-Night.jpg'
                },
                {
                    title: 'Clincs',
                    description: 'this is a description for the clincs description',
                    img: 'http://www.ahmedabadbraces.com/photos/clinicpic6.jpg'
                }
            ]
        },
    ];

    privilegeRequests:PrivilegeRequest[] = [
        new PrivilegeRequest('Hospitals', 'can you approve this request!'),
        new PrivilegeRequest('Clincs', 'if you can accept this request please'),
        new PrivilegeRequest('Hospitals', 'can you approve this request!'),
        new PrivilegeRequest('Clincs', 'if you can accept this request please'),
        new PrivilegeRequest('Hospitals', 'can you approve this request!'),
        new PrivilegeRequest('Clincs', 'if you can accept this request please')
    ];

    getUserPrivileges(id) : { title:string, categories:{title:string,description:string, img:string}[]}[]{
        // TO-Do
        return this.privileges;
    }

    getAllPrivilages() : { title:string, categories:{title:string,description:string, img:string}[]}[]{
        // TO-DO
        return this.privileges;
    }

    getPrivilegeRequestsSize(): number{
        return 9;
    }

    getPrivilegeRequests(){
        return this.privilegeRequests;
    }
}