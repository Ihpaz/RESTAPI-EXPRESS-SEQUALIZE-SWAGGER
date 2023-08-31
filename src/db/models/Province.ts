import { DataTypes,Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface ProvinceAttributes {
  id?: number,
  provinceName?: string | null,

  createdAt?: Date,
  updateAt?: Date
}

export interface ProvinceInput extends Optional<ProvinceAttributes, 'id'>{}
export interface ProvinceOutput extends Required<ProvinceAttributes>{}

class Province extends Model<ProvinceAttributes, ProvinceInput> implements ProvinceAttributes {
  public id!: number;
  public provinceName!: string;

  public readonly createdAt!: Date;
  public readonly updateAt!: Date;

}


Province.init({
    id: {
      allowNull: false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.BIGINT
    },
    provinceName:{
      allowNull:true,
      type:DataTypes.STRING
    }
},{
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Province;

