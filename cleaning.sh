#!/bin/bash

search(){
    for file in $1/*
    do
        if [ -d $file ]
        then
            search $file
        else
            suffix=${file##*.}
            if [ $suffix == "js" ] || [ $suffix == "map" ];
            then
                rm $file
            fi
        fi
    done
}

dir="./src"
search $dir