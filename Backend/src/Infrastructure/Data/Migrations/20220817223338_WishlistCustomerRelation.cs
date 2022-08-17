using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class WishlistCustomerRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wishlists_Users_CustomerId",
                table: "Wishlists");

            migrationBuilder.DropIndex(
                name: "IX_Wishlists_CustomerId",
                table: "Wishlists");

            migrationBuilder.AddColumn<Guid>(
                name: "WishlistId",
                table: "Users",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Wishlists_CustomerId",
                table: "Wishlists",
                column: "CustomerId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Wishlists_Users_CustomerId",
                table: "Wishlists",
                column: "CustomerId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Wishlists_Users_CustomerId",
                table: "Wishlists");

            migrationBuilder.DropIndex(
                name: "IX_Wishlists_CustomerId",
                table: "Wishlists");

            migrationBuilder.DropColumn(
                name: "WishlistId",
                table: "Users");

            migrationBuilder.CreateIndex(
                name: "IX_Wishlists_CustomerId",
                table: "Wishlists",
                column: "CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Wishlists_Users_CustomerId",
                table: "Wishlists",
                column: "CustomerId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}
