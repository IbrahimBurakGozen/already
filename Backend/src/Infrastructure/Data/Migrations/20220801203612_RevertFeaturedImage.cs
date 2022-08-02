using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Data.Migrations
{
    public partial class RevertFeaturedImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductImages_FeaturedImageId1",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_FeaturedImageId1",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "FeaturedImageId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "FeaturedImageId1",
                table: "Products");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "FeaturedImageId",
                table: "Products",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "FeaturedImageId1",
                table: "Products",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_FeaturedImageId1",
                table: "Products",
                column: "FeaturedImageId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductImages_FeaturedImageId1",
                table: "Products",
                column: "FeaturedImageId1",
                principalTable: "ProductImages",
                principalColumn: "Id");
        }
    }
}
