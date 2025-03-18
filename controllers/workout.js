const Workout = require("../models/Workout");

module.exports.addWorkout = (req,res) => {

    let newWorkout = new Workout({
        userId : req.body.userId,
        name : req.body.name,
        duration : req.body.duration
    });

    newWorkout.save()
    .then(savedWorkout => res.status(201).send(savedWorkout))
    .catch(saveErr => {

        console.error("Error in saving the workout: ", saveErr)
        return res.status(500).send({ error: 'Failed to save the workout' });
    })

};

 module.exports.getWorkoutById = (req, res) => {

        Workout.find({userId:req.body.userId})
        .then(foundWorkout => {
            if (!foundWorkout) {
                return res.status(404).send({ error: 'Workout not found' });
            }
            return res.status(200).send({ foundWorkout });
        })
        .catch(err => {
            console.error("Error in fetching the workout: ", err)
            return res.status(500).send({ error: 'Failed to fetch Workout' });
        });

    };


module.exports.updateWorkout = (req, res) => {
        console.log(req.params.id)
        let workoutUpdates = {
            userId : req.body.userId,
            name: req.body.name,
            duration : req.body.duration
        }

        return Workout.findByIdAndUpdate(req.params.id, workoutUpdates,{new:true},)
        .then(updatedWorkout => {

            if (!updatedWorkout) {

                return res.status(404).send({ error: 'Workout not found' });

            }

            return res.status(200).send({ 
                message: 'Workout updated successfully', 
                updatedWorkout: updatedWorkout 
            });

        })
        .catch(err => {
            console.error("Error in updating Workout : ", err)
            return res.status(500).send({ error: 'Error in updating Workout.' });
        });
    };


module.exports.deleteWorkout = (req, res) => {

        return Workout.deleteOne({ _id: req.params.id})
        .then(deletedResult => {

            if (deletedResult < 1) {

                return res.status(400).send({ error: 'No Workout deleted' });

            }

            return res.status(200).send({ 
                message: 'Workout deleted successfully'
            });

        })
        .catch(err => {
            console.error("Error in deleting a Workout : ", err)
            return res.status(500).send({ error: 'Error in deleting a Workout.' });
        });
    };

module.exports.completeWorkoutStatus = (req, res) => {

    let updatedStatus = {
        status : req.body.status
    }

    return Workout.findByIdAndUpdate(req.params.id, updatedStatus,{new:true},)
    .then(updatedWorkout => {

        if (!updatedWorkout) {

            return res.status(404).send({ error: 'Workout not found' });

        }

        return res.status(200).send({ 
            message: 'Status updated successfully', 
            updatedWorkout: updatedWorkout 
        });

    })
    .catch(err => {
        console.error("Error in updating Workout : ", err)
        return res.status(500).send({ error: 'Error in updating Workout.' });
    });
};

