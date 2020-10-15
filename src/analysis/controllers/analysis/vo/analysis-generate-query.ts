import { IsNotEmpty } from "class-validator";

export class AnalysisGenerateQuery {
  @IsNotEmpty()
  squad: string;

  @IsNotEmpty()
  proj: string;
}
