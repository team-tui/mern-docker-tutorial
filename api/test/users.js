let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);
describe('User Routes Testing', () => {
    describe('/GET Request to Create a User', () => {
        it('Create a user', (done) => {
            chai.request(server)
                .get('/user-create')
                .end((err, res) => {
                    res.body.should.be.an('object')
                    done();
                });
        }).timeout(10000);
    });

    describe('/GET Request to get User List', () => {
        it('Get User Array', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('array')
                    done();
                });
        })
    });
});