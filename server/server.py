from flask import Flask, request, jsonify, make_response
from flask_restful import Resource, Api, reqparse
import json
from pymongo import MongoClient
from pprint import pprint
import urllib
from bson import json_util, ObjectId
import operator
import uuid
import http

app = Flask(__name__)
api = Api(app)
client = MongoClient('localhost', 27017)
db = client['YEMEK_TARIFLERI']

parser = reqparse.RequestParser()

class Yemekler(Resource):
    def __init__(self):
        self.yemek = db.Yemek

    def post(self):
        data = request.get_json()
        gelenMalzemeler = data['malzemeler']
        # self.yemek.aggregate([
        #     {
        # "$project": {
        #     "returnObject": {
        # "$regexFind": {"input": "$fname", "regex": {"in": regex} }}}}])
        regex = "("
        i = 0
        for malzeme in gelenMalzemeler:
            i = i + 1
            regex = regex + malzeme
            if (i < len(gelenMalzemeler)):
                regex += "|"
        regex += ")+"
        print(regex)
        yemekler = [yemek for yemek in self.yemek.find({"malzemeler": {"$regex" : regex }})]
        for yemek in yemekler:
            yemek['_id'] = str(yemek['_id'])
        print(yemekler)
        return(jsonify(yemekler=yemekler))

api.add_resource(Yemekler, '/yemekler', methods=['POST'])

class BirYemek(Resource):
    def __init__(self):
        self.yemek = db.Yemek

    def get(self):
        yemek_id = request.args.get('yemek_id')
        yemek = self.yemek.find_one({"_id": yemek_id})
        return (jsonify(yemek=yemek))

api.add_resource(BirYemek, '/yemek/<yemek_id>', methods=['GET'])

if __name__=='__main__':
    app.run(host='0.0.0.0', port='8086')