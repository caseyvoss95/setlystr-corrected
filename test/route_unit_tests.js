const chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp)
const assert = chai.assert;

const app = require('../server.js')
const setlistController = require('../controllers/setlist.js');

describe('/GET landing page', () => {
    it('returns status 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                assert.equal(res.status, 200)
                done();
            })
    })
    it('returns expected output', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                assert.equal(res.text, '<a href="setlist">continue to the app</a>')
                done();
            })
    })
})

describe('/GET Index', () => {
    it('returns status 200', (done) => {
        chai.request(app)
            .get('/setlist')
            .end((err, res) => {
                console.log(res)
                assert.equal(res.status, 200)
                done();
            })
    })
}) //todo verify that seed data appears on webpage as expected