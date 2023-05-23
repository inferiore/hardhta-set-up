// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract PlatziFood {

    constructor(){}

    struct PlatziFoodItem{
        address owner;
        string url;
        string foodName;
        string originCountry;
    }

    PlatziFoodItem[] private platziFoods;
    
    function addPlatziFood(
        string memory foodUrl,
        string memory foodName,
        string memory originCountry        
    ) public {
        platziFoods.push(
            PlatziFoodItem(msg.sender,foodUrl,foodName,originCountry)
        );
    }

    function getAllPlatziFoods() public view returns (PlatziFoodItem[]memory){
        return platziFoods;
    }

    function getAllPlatziFoodsByOwner()public view returns(PlatziFoodItem[]memory){
        uint256 itemCount = 0;
        for (uint256 i; i<platziFoods.length;i++){
            if(platziFoods[i].owner == msg.sender){
                itemCount +=1; 
            }
        }
        PlatziFoodItem[] memory myFoods = new PlatziFoodItem[](itemCount);
        for (uint256 i; i<platziFoods.length;i++){
            if(platziFoods[i].owner == msg.sender){
                myFoods[i] = platziFoods[i]; 
            }
        }
        return myFoods;
    }
}