using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class ProcessFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Distributions_Orders_OrderId",
                table: "Distributions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Distributions",
                table: "Distributions");

            migrationBuilder.RenameTable(
                name: "Distributions",
                newName: "Processes");

            migrationBuilder.RenameIndex(
                name: "IX_Distributions_OrderId",
                table: "Processes",
                newName: "IX_Processes_OrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Processes",
                table: "Processes",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Processes_Orders_OrderId",
                table: "Processes",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Processes_Orders_OrderId",
                table: "Processes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Processes",
                table: "Processes");

            migrationBuilder.RenameTable(
                name: "Processes",
                newName: "Distributions");

            migrationBuilder.RenameIndex(
                name: "IX_Processes_OrderId",
                table: "Distributions",
                newName: "IX_Distributions_OrderId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Distributions",
                table: "Distributions",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Distributions_Orders_OrderId",
                table: "Distributions",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
