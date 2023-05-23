const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PlatziFood", function () {
    it("Add new dish", async function () {
      const [owner, addr1] = await ethers.getSigners();

      const PlatziFood = await ethers.getContractFactory("PlatziFood");
      const platziFood = await PlatziFood.deploy();
     
      var addFood = await platziFood.addPlatziFood(
        "https://media-cdn.tripadvisor.com/media/photo-s/05/24/40/01/el-gran-chef-marino.jpg",
        "Mojara Frita",
        "Colombia"
      )    
      await addFood.wait();

      var addFood2 = await platziFood.connect(addr1).addPlatziFood(
        "https://media-cdn.tripadvisor.com/media/photo-s/05/24/40/01/el-gran-chef-marino.jpg",
        "Ceviche",
        "Peru"
      )    
      await addFood2.wait();
      
      var foods = await platziFood.getAllPlatziFoods();

      expect(foods.length).to.equal(2);

      var foodsByOwner = await platziFood.getAllPlatziFoodsByOwner();

      expect(foodsByOwner.length).to.equal(1);


  });
  
});
