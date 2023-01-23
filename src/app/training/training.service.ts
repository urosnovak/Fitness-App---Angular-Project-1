import { Exercise } from  "./exercise.model";

//pravimo nizove 

export class TrainingService {
    private exercises: Exercise [] = [
{
    id:'running',
    name: 'Morning running',
    duration: 20,
    calories:100,
    date: new Date(),
    status: 'canceled'
},
{
    id:'squats',
    name: 'Midday squats',
    duration: 15,
    calories:200,
    date: new Date(),
    status: 'done'
},
{
    id:'running',
    name: 'Evening running',
    duration: 10,
    calories:350,
    date: new Date(),
    status: 'canceled'
},
{
    id:'walking',
    name: 'Morning walking',
    duration: 30,
    calories:400,
    date: new Date(),
    status: 'done'
}
    ];

    //pravimo metod za pristupanje ovim podacima
getExercises(){
    return this.exercises;
}

}