import { body, ValidationChain } from "express-validator";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/status";

export const createValidator: ValidationChain[] = [
  body("title")
    .not()
    .isEmpty()
    .withMessage("The task title mandatory.")
    .trim()
    .isString()
    .withMessage("Title needs to be in text format."),
  body("date")
    .not()
    .isEmpty()
    .withMessage("The task date mandatory.")
    .isString()
    .withMessage("The date needs to be in a valid date format."),
  body("description")
    .trim()
    .isString()
    .withMessage("Description needs to be in text format"),
  body("priority")
    .trim()
    .isIn([Priority.normal, Priority.high, Priority.low])
    .withMessage("Priority can only be normal, high or low"),
  body("status")
    .trim()
    .isIn([Status.todo, Status.completed, Status.inProgress])
    .withMessage("Status can only be todo, inProgress or completed"),
];
