//Написати 5 різних API тестів для сервсіу https://jsonplaceholder.typicode.com/ використовуючи cy.request або будь-який плагін 

/// <reference types="cypress" />
describe('Request', () => {
    it('Check Username by GET request with then', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[9].name).to.eq('Clementina DuBuque');
        });
    });
});


describe('Request', () => {
    it('Check Post titile by GET request with then', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[0].title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
        });
    });
});


describe('Request', () => {
    it('Check Creating a new Post by POST request', () => {
        const newPost = {
            title: '101 Post',
            body: 'Test body text',
            userId: 1,
        };

        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body.id).to.eq(101);
            expect(response.body.title).to.eq('101 Post');
        });
    });
});

describe('Request', () => {
    it('Check Adding a new Photo by POST request', () => {
        const newPhoto = {
            albumId: 100,
            id: 5001,
            title: 'beautiful photo',
            url: 'https://via.placeholder.com/600/2786d2',
            thumbnailUrl: 'https://via.placeholder.com/150/2786d2'
        };

        cy.request('POST', 'https://jsonplaceholder.typicode.com/photos', newPhoto).then((response) => {
            expect(response.status).to.eq(201); 
            expect(response.body.id).to.eq(5001);
            expect(response.body.title).to.eq('beautiful photo');
        });
    });
});


describe('Request', () => {
    it('Changing album name by PUT request', () => {
        const newAlbumTitle = {
            userId: 1,
            id: 1,
            title: 'New beautiful title',
        };

        cy.request('PUT', 'https://jsonplaceholder.typicode.com/albums/1', newAlbumTitle).then((updateResponse) => {
            expect(updateResponse.status).to.eq(200);
            expect(updateResponse.body.title).to.eq('New beautiful title');
        });
    });
});




